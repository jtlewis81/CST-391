import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sermon } from '../models/sermons.model';
import { SermonServiceService } from '../service/sermon-service.service';

@Component({
  selector: 'app-list-sermons',
  templateUrl: './list-sermons.component.html',
  styleUrls: ['./list-sermons.component.css']
})

export class ListSermonsComponent implements OnInit {
  selectedSermon!: Sermon;
  sermons: Sermon[] = [];

  constructor( private route: ActivatedRoute, private service: SermonServiceService) { }

  ngOnInit() {
    console.log('Getting sermon data....');
    this.service.getSermons((sermons: Sermon[]) => {
      this.sermons = sermons;
      console.log('this.sermons',this!.sermons);
    });
    this.selectedSermon = this.sermons[0];
    this.onSelectSermon(this.selectedSermon);
  }

  onSelectSermon(sermon: Sermon) {
    this.selectedSermon = sermon;
  }
}
