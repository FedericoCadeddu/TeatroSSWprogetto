import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  key: string;
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';

  constructor(private http: HttpClient) {
    this.key = 'bf1c48ab';
    //bf1c48ab//
  }
  
  public getValue() {
    const obs = ajax({
      method: 'GET',
      url: this.URL + '/get?key=' + this.key,
      crossDomain: true,
    });
    obs.subscribe({
      next: (res: AjaxResponse<any>) => {
         console.log(res.response);
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }
  
  public setValue(data:Object) {
    const obs = ajax({
      method: 'POST',
      url:this.URL + '/set?key=' + this.key,
      crossDomain: true,
      body: data
    })
    obs.subscribe({
      next: (res: AjaxResponse<any>) => {
         console.log('Ok!');
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }
}


