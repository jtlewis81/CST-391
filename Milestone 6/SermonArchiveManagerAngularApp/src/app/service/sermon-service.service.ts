import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sermon } from '../models/sermons.model';
import { Speaker } from '../models/speakers.model';
import { Series } from '../models/series.model';


@Injectable({ providedIn: 'root' })
export class SermonServiceService {

  private host = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  public getSermons(callback: (sermons: Sermon[]) => void): void {
    this.http.get<Sermon[]>(this.host + "/sermons")
      .subscribe((sermons: Sermon[]) => {
        callback(sermons);
      });
  }

  public getSermonById(id: number, callback: (sermon: Sermon) => void): void {
    let request = this.host + `/sermons/?id=${id}`;
    console.log('request', request);
    this.http.get<Sermon>(request)
      .subscribe((sermon: Sermon) => {
        console.log('have Sermon', sermon);
        callback(sermon);
    });
  }

  public createSermon(sermon: Sermon, callback: () => void): void {
    this.http.post<Sermon>(this.host + "/sermons", sermon)
      .subscribe((data) => {
        callback();
      });
  }

  public updateSermon(sermon: Sermon, callback: () => void): void {
    this.http.put<Sermon>(this.host + "/sermons", sermon)
      .subscribe((data) => {
        callback();
      });
  }

  public deleteSermon(id: number, callback: () => void): void {
    this.http.delete(this.host + "/sermons/" + id)
      .subscribe((data) => {
        callback();
      })
  }

  public getSpeakers(callback: (speakers: Speaker[]) => void): void {
    this.http.get<Speaker[]>(this.host + "/speakers")
      .subscribe((speakers: Speaker[]) => {
        callback(speakers);
      });
  }

  public getSeries(callback: (series: Series[]) => void): void {
    this.http.get<Series[]>(this.host + "/series")
      .subscribe((series: Series[]) => {
        callback(series);
      });
  }
}
