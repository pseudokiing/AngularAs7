import { Injectable } from '@angular/core';
import {comicBookList} from '../contentDB';
//import { Content } from '@angular/compiler/src/render3/r3_ast';
import {Content} from '../content-card/content-helper';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContent() : Content [] {
    return comicBookList;
  }
  getContentObs() : Observable<Content[]>{
    this.messageService.add('Content retreived, all heroes present at the Hall of Justice');
    return of(comicBookList);
  }

}
