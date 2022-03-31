import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadCommissionServiceService {
  currentCommissionId: string = 'undifined';

  constructor() { }
}
