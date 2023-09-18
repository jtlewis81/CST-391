import { Component, OnInit } from '@angular/core';
import { Sermon } from '../models/sermons.model';
import { SermonServiceService } from '../service/sermon-service.service';

@Component({
  selector: 'app-create-sermon',
  templateUrl: './create-sermon.component.html',
  styleUrls: ['./create-sermon.component.css']
})

export class CreateSermonComponent implements OnInit{
  sermon: Sermon = {
    id: Math.floor(Math.random() * 1000000),
    title: '',
    speaker: '',
    date: '',
    series: '',
    reference: '',
    filepath: ''
  };

  wasSubmitted: boolean = false;

  constructor(private service: SermonServiceService) {}

  ngOnInit(): void { }

  public onSubmit() {
    console.log(this.sermon);
    let status = this.service.createSermon(this.sermon,
      () => status);
    console.log('The return from createSermon() was ' + status);
    this.wasSubmitted = true;
  }

}
