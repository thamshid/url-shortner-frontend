import {Component} from "@angular/core";
import {appService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService]
})
export class AppComponent {
  title = 'URL SHORTER';
  urlList: any;
  url: 'asa';
  shortUrl: string;
  BASE_URL = 'http://localhost:8000/';

  constructor(private appService: appService) {
  }

  ngOnInit() {
    this.getUrlList();
  }

  getUrlList() {
    this.appService
      .getUrls()
      .subscribe((data: any) => {
        this.urlList = data;
      });
  }

  getShortUrl() {
    this.shortUrl = null;
    let urlData = {
      last_enter_url: this.url
  }
    this.appService
      .postUrl(urlData)
      .subscribe((data: any) => {
        this.shortUrl = this.BASE_URL + data.key;
        this.getUrlList();
      });
  }
  deleteUrl(key: any) {
    this.appService
      .deleteUrl(key)
      .subscribe((data: any) => {
        this.getUrlList();
      });
  }

}
