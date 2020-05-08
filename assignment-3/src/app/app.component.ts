import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-1';

  userData: PeriodicElement[];

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
  dataSource: any;

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://reqres.in/api/users')
      .subscribe((data: any) => {
        console.log(data);
        this.userData = data.data;
        this.dataSource = this.userData;
      })
  }

}
