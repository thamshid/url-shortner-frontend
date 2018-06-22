import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class appService {
  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:8000/v1/';

  getUrls() {
    return this
      .http
      .get(`${this.url}urls/`,);
  }

  postUrl(data: any) {
    return this
      .http
      .post(`${this.url}urls/`, data);
  }

  deleteUrl(urlId: any) {
    return this
      .http
      .delete(`${this.url}urls/` + urlId + '/');
  }
}
