import { Injectable } from '@angular/core';
import {comicBookList} from '../contentDB';
import {Content} from '../content-card/content-helper';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getContent() : Content [] {
  //   return comicBookList;
  // }
  getContentObs() : Observable<Content[]>{
    this.messageService.add('Content retreived, all heroes present at the Hall of Justice');
    return this.http.get<Content[]>('api/comics');
  }

}
