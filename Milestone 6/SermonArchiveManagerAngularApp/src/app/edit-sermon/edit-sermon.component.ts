import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sermon } from '../models/sermons.model';
import { SermonServiceService } from '../service/sermon-service.service';

@Component({
  selector: 'app-edit-sermon',
  templateUrl: './edit-sermon.component.html',
  styleUrls: ['./edit-sermon.component.css']
})

export class EditSermonComponent implements OnInit{
  @Input() id!: number;
  sermon!: Sermon;

  wasSubmitted: boolean = false;

  constructor(private service: SermonServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('ID from route parameter:', this.id);
      this.service.getSermonById(this.id, (sermon: Sermon) => {
        console.log('Sermon data received:', sermon);
        this.sermon = sermon;
      });
    });
   };

  ngOnInit(): void { }

  public onSubmit() {
    console.log(this.sermon);
    let status = this.service. updateSermon(this.sermon,
      () => status);
    console.log('The return from createSermon() was ' + status);
    this.wasSubmitted = true;
  }
}
