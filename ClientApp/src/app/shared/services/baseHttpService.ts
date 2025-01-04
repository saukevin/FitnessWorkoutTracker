import { environment } from '../../../environments/environment';

export class BaseHttpService {
  protected baseUri: string = environment.baseApi;
}
