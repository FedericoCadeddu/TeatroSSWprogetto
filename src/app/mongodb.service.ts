import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  key: string;
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';

  constructor(private http: HttpClient) {
    this.key = '049b67ce';
    //bf1c48ab//
  }

  public getvalue(data:Object): Observable<Object> {
    return this.http.get<Object>(this.URL + '/get?key=' + this.key);
  }
  
  public postvalue(data: Object, key: string): Observable<Object> {
    return this.http.post(
      this.URL + '/set?key=' + key + '&msg=' + JSON.stringify(data),
      data);
  }
}


