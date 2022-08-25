import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular-nestjs-firebase/api-interfaces';
import { environment } from '../environments/environment';

@Component({
  selector: 'angular-nestjs-firebase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>(`${environment.apiUrl}/hello`);
  constructor(private http: HttpClient) {}
}
