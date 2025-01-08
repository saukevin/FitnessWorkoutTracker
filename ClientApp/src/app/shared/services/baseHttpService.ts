import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';

export class BaseHttpService {
  protected baseUri: string = environment.baseApi;
  protected httpClient: HttpClient = inject(HttpClient);
}
