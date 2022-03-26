import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class EditPageEmittersService {


  newUrlUploaded = new EventEmitter<String>();
}
