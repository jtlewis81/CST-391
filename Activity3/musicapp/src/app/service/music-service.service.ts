// Import necessary modules and data
import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';

// Decorate the service as Injectable and provide it at the root level
@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  // Initialize an array to store albums using data from the JSON file
  albums: Album[] = exampledata;

  // Get a list of all unique artists from the albums
  public getArtists(): Artist[] {
    let artists: Artist[] = [];
    let artistSet = new Set<string>();

    // Iterate through the albums and add each artist to the artistSet
    this.albums.forEach(a => artistSet.add(a.artist));

    // Convert the unique artist names into Artist objects and add them to the artists array
    artistSet.forEach(a => artists.push({ artist: a }));

    // Return the list of unique artists
    return artists;
  }

  // Get a list of all albums
  public getAlbums(): Album[] {
    // Return the list of albums
    return this.albums;
  }

  // Get a list of albums by a specific artist
  public getAlbumsOfArtist(artistName: string): Album[] {
    let albums: Album[] = [];

    // Iterate through the albums and add matching albums to the albums array
    this.albums.forEach(album => {
      if (album.artist === artistName) {
        albums.push(album);
      }
    });

    // Return the list of albums by the specified artist
    return albums;
  }

  // Create a new album and add it to the list of albums
  public createAlbum(album: Album): number {
    // Add a new Album to the list of Albums
    this.albums.push(album);
    return 1; // Indicate a successful creation
  }

  // Update an existing album in the list of albums
  public updateAlbum(album: Album): number {
    // Search for the album by its ID and replace it in the list if found
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].albumId === album.albumId) {
        this.albums.splice(i, 1, album); // Replace the album
        return 0; // Indicate a successful update
      }
    }
    return -1; // Indicate that the album was not found
  }

  // Delete an album from the list of albums by its ID
  public deleteAlbum(id: number): number {
    // Search for the album by its ID and delete it from the list if found
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].albumId === id) {
        this.albums.splice(i, 1); // Delete the album
        return 0; // Indicate a successful deletion
      }
    }
    return -1; // Indicate that the album was not found
  }
}
