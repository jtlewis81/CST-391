import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'My Music Collection';
  version = '1.0';

  constructor(private router: Router) {}

  displayArtistList() {
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  }

  displayVersion() {
    alert("Version: " + this.version);
  }
}
