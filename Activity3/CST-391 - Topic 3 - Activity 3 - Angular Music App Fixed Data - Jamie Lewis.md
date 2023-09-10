### Jamie Lewis
### CST-391
### 9/9/23
### Instructor Bobby Estey

---

<div style="text-align:center;"><h3>Activity 3: Angular Music App Fixed Data</h3></div>

### Part 1: Basic Angular Components, Events, Routes, and Data Binding

#### SCREENSHOTS

Responsive Grid

![Responsive Grid - Large](activity%203%20resources/simpleapp%20-%20larger%20screen.png)
![Responsive Grid - Small](activity%203%20resources/simpleapp%20-%20smaller%20screen.png)

Before Name Entry

![Before Name Entry](activity%203%20resources/simpleapp%20-%20before%20name.png)

After Name Entry

![After Name Entry](activity%203%20resources/simpleapp%20-%20after%20name.png)

JS Console Output in Browser

![JS Console Output](activity%203%20resources/simpleapp%20-%20browser%20and%20console.png)

#### RESEARCH

#### 1. Describe @Input Decorator (info.component.ts)

This creates a data-binding point. It allows data to be passed to a child component from its parent. In this project, the value is passed from the info selector in shop.component.html in the following line of code:

```<app-info [name]="answer" *ngIf="answer != 'unknown'"></app-info>```

#### 2. Describe [value] (info.component.html)

As shown above, the [name] value is passed to the constructor within the export of info.component.ts using the app-info selector, which loads the info module. This is how data is passed when data-binding is being used. 

#### 3. Describe [(ngModel)] (info.component.html)

Importing the FormsModule allows 2-way data binding. Adding this property to an HTML Form element causes changes to the input field to update the assigned variable's value in the component. Likewise, changing the variable value on the backend will update the input field's value.

---

### Part 2: Creating a Music Application – The Front End

#### SCREENSHOTS

Initial Application Page (Home page)

![Home Page](activity%203%20resources/musicapp%20-%20home%20page.png)

GCU Homepage (Links to external site, opens in new tab)

![GCU Home Page](activity%203%20resources/musicapp%20-%20gcu.png)

Create Album Page

![Create Album](activity%203%20resources/musicapp%20-%20create%20album.png)

Artist List

![Artist List](activity%203%20resources/musicapp%20-%20artist%20list.png)

About Box

![About](activity%203%20resources/musicapp%20-%20about.png)

#### RESEARCH

Commented music-service.service.ts file

```
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
```