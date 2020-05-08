import { Component } from '@angular/core';

export interface users {
  id: number;
  name: string;
  age: number;
  city: String;
}

const userData: users[] = [
  { id: 1, name: 'Aman', age: 22, city: 'Jhansi'},
  { id: 2, name: 'Aakash', age: 21, city: 'Khandawa'},
  { id: 3, name: 'Nawal', age: 22, city: 'Jharkhand'},
  { id: 4, name: 'Shivam', age: 21, city: 'Jhansi'},
  { id: 5, name: 'Aman', age: 21, city: 'Shivpuri'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-2';
  displayedColumns: string[] = ['id', 'name', 'age', 'city'];
  dataSource = userData;
}
