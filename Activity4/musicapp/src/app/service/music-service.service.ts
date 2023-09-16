// Import necessary modules and data
import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';

// Decorate the service as Injectable and provide it at the root level
@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  private host = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  // Get a list of all unique artists from albums
  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(this.host + "/artists")
      .subscribe((artists: Artist[]) => {
        callback(artists);
      });
  }

  // Get a list of all albums
  public getAlbums(callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(this.host + "/albums")
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }

  // Get a list of albums by a specific artist
  public getAlbumsOfArtist(artistName: String, callback: (albums: Album[]) => void): void {
    let request = this.host + `/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request)
      .subscribe((albums: Album[]) => {
        console.log('have albums', albums);
        callback(albums);
    });
  }

  // Create a new album and add it to the list of albums
  public createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  }

  // Update an existing album in the list of albums
  public updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  }

  // Delete an album from the list of albums by its ID
  public deleteAlbum(id: number, callback: () => void): void {
    this.http.delete(this.host + "/albums/" + id)
    .subscribe((data) => {
      callback();
    });
  }
}
