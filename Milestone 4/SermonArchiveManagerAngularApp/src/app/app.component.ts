import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sermon Archive Manager';
  version = "1.0";

  constructor (private router: Router) {
    this.router.navigate(['list-sermons'], { queryParams: {data: new Date()} });
  }

  displayVersion(){
    alert("SAM Version: " + this.version);
  }

}
