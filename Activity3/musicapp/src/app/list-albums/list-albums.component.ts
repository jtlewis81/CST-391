import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})

export class ListAlbumsComponent implements OnInit{
  @Input() artist!: Artist;
  albums: Album[] | null = null;
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) { }

  ngOnInit(){
    this.albums = this.service.getAlbumsOfArtist(this.artist!.artist);
  }

  public onSelectAlbum(album: Album)
  {
    this.selectedAlbum = album;
  }
}
