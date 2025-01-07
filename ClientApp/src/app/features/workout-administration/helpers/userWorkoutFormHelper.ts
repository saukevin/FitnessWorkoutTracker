import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateWorkoutCourseDTO } from '../models/createWorkoutCourseDTO';
import { CreateExerciseDTO } from '../models/createExerciseDTO';
import { WorkoutCourseDTO } from '../models/workoutCourseDTO';
import { ExerciseDTO } from '../models/exerciseDTO';
import { UpdateWorkoutCourseDTO } from '../models/updateWorkoutCourseDTO';
import { UpdateExerciseDTO } from '../models/updateExerciseDTO';

export class UserWorkoutFormHelper {
  public static createNewWorkoutCourseForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      description: new FormControl(null, Validators.maxLength(150)),
      exercises: new FormArray([this.createNewExerciseForm()]),
    });
  }

  public static createNewExerciseForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      description: new FormControl(null, Validators.maxLength(150)),
      sets: new FormControl(1, [Validators.required, Validators.min(0)]),
      repetitions: new FormControl(1, [Validators.required, Validators.min(0)]),
      load: new FormControl(0, Validators.min(0)),
    });
  }

  public static mapFormToCreateWorkoutCourseDTO(
    form: FormGroup
  ): CreateWorkoutCourseDTO {
    const exercisesForms: FormGroup[] = (form.get('exercises') as FormArray)
      .controls as FormGroup[];

    const exercises: CreateExerciseDTO[] = exercisesForms.map(
      (exerciseForm: FormGroup) => {
        const exercise: CreateExerciseDTO = {
          name: exerciseForm.get('name')!.value,
          description: exerciseForm.get('description')!.value ?? null,
          sets: exerciseForm.get('sets')!.value,
          repetitions: exerciseForm.get('repetitions')!.value,
          load: exerciseForm.get('load')!.value ?? null,
        };
        return exercise;
      }
    );

    return {
      name: form.get('name')!.value,
      description: form.get('description')!.value,
      createExercises: exercises,
    } as CreateWorkoutCourseDTO;
  }

  public static createEditWorkoutCourseForm(
    workoutCourse: WorkoutCourseDTO
  ): FormGroup {
    return new FormGroup({
      id: new FormControl(workoutCourse.id, Validators.required),
      name: new FormControl(workoutCourse.name, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      description: new FormControl(
        workoutCourse.description,
        Validators.maxLength(150)
      ),
      exercises: new FormArray(
        this.createEditExercisesForms(workoutCourse.exercises)
      ),
    });
  }

  public static mapFormToEditWorkoutCourseDTO(
    form: FormGroup
  ): UpdateWorkoutCourseDTO {
    const exercisesForms: FormGroup[] = (form.get('exercises') as FormArray)
      .controls as FormGroup[];

    const exercises: UpdateExerciseDTO[] = exercisesForms.map(
      (exerciseForm: FormGroup) => {
        const exercise: UpdateExerciseDTO = {
          exerciseId: exerciseForm.get('id')
            ? exerciseForm.get('id')!.value
            : null,
          name: exerciseForm.get('name')!.value,
          description: exerciseForm.get('description')!.value ?? null,
          sets: exerciseForm.get('sets')!.value,
          repetitions: exerciseForm.get('repetitions')!.value,
          load: exerciseForm.get('load')!.value ?? null,
        };
        return exercise;
      }
    );

    return {
      workoutCourseId: form.get('id')!.value,
      name: form.get('name')!.value,
      description: form.get('description')!.value,
      updateExercises: exercises,
    } as UpdateWorkoutCourseDTO;
  }

  private static createEditExercisesForms(
    exercises: ExerciseDTO[]
  ): FormGroup[] {
    return exercises.map(
      (e: ExerciseDTO) =>
        new FormGroup({
          id: new FormControl(e.id),
          name: new FormControl(e.name, [
            Validators.required,
            Validators.maxLength(30),
          ]),
          description: new FormControl(
            e.description,
            Validators.maxLength(150)
          ),
          sets: new FormControl(e.sets, [
            Validators.required,
            Validators.min(0),
          ]),
          repetitions: new FormControl(e.repetitions, [
            Validators.required,
            Validators.min(0),
          ]),
          load: new FormControl(e.load, Validators.min(0)),
        })
    );
  }
}
