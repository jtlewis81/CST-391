import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
declare var $: any; // Declare jQuery for Bootstrap

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})

export class DisplayAlbumComponent implements OnInit {
  @Input()  album!: Album;
  tracks: Track[] | null = null;

  constructor () { }

  ngOnInit() {
    this.tracks = this.album.tracks;
    this.tracks?.sort((a,b) => a.number - b.number);
    // Initialize Bootstrap components
    $('[data-toggle="collapse"]').collapse().show();
  }

}
