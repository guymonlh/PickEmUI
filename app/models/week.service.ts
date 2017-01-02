import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Week } from '../models/week.model';

@Injectable()
export class WeekService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private weeksUrl = 'api/weeks.json';  // URL to web api

  constructor(private http: Http) { }

  getWeeks(): Promise<Week[]> {
    return this.http.get(this.weeksUrl)
               .toPromise()
               .then(response => response.json().data as Week[])
               .catch(this.handleError);
  }


  getWeek(id: number): Promise<Week> {
    // const url = `${this.weeksUrl}/${id}`;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as Week)
    //   .catch(this.handleError);
    console.log("made it: " + id);
    const url = `${this.weeksUrl}/${id}`;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as Week)
    //   .catch(this.handleError);
      return this.http.get(this.weeksUrl)
      .toPromise()
      .then(response => response.json().data[id-1] as Week)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}