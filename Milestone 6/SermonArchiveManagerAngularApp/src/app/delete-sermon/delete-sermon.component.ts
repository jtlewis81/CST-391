import { Component, OnInit } from '@angular/core';
import { Sermon } from '../models/sermons.model';
import { SermonServiceService } from '../service/sermon-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-sermon',
  templateUrl: './delete-sermon.component.html',
  styleUrls: ['./delete-sermon.component.css']
})

export class DeleteSermonComponent implements OnInit {
  id!: number;
  sermon!: Sermon;

  wasSubmitted: boolean = false;

  constructor(private service: SermonServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log('ID from route parameter:', this.id);
      this.service.getSermonById(this.id, (sermon: Sermon) => {
        console.log('Sermon data received:', sermon);
        this.sermon = sermon;
      });
    });
  }

  public onDelete() {
    let status = this.service.deleteSermon(this.id, () => status );
    console.log('DeleteSermon returned ' + status);
    this.wasSubmitted = true;
  }

}
