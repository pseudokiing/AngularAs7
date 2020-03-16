import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Content } from '../content-card/content-helper';
import { SelectControlValueAccessor } from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit 
{
  @Input() startingId: number;
  @Output() newComicEvent = new EventEmitter<Content> ();
    newComicItem: Content;
    currentId: number;
    err = ``;
    success = ``;
    aliasBinding: any;
    nameBinding: string;
    bodyBinding: any;
    genreBinding: any;
    imgBinding: any;

  constructor(private addComicMessage: MessageService) { }

  ngOnInit() {
    this.currentId = this.startingId;
    //console.log(this.currentId);
  }
  addComic(alias: string, name: string, body: string, genre: string, imgUrl: string) 
  {
    let addNewComic = new Promise((success, fail) =>
    {
      try
      {
        this.newComicItem = 
      {
        id: this.currentId,
        alias,
        name,
        body,
        genre,
        imgUrl 
      }
      let title = this.newComicItem.alias;
      if (this.newComicItem.body)
      {
        this.currentId++;
        this.newComicEvent.emit(this.newComicItem);
        this.aliasBinding= ``;
        this.nameBinding= ``;
        this.bodyBinding= ``;
        this.genreBinding= ``;
        this.imgBinding= ``;
      
        success(`The ${title} comic was added succesfully `);
      }
      else
      {
      throw `Error: Comic not added, please enter a description for the ${title} comic`;
      }
    }
    catch(err)
    {
     fail(err)
    }
  });
    addNewComic.then(r => 
      {
        let title = this.newComicItem.alias;
        this.err = ``;
        this.success = `The ${title} comic was added succesfully `;
        this.addComicMessage.add(`The ${title} comic was added succesfully`);
      }).catch(r => { 
        this.success = ``;
        this.err = r;
      })
  }
}