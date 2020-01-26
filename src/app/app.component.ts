import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  navigate(input: any) {
    this.router.navigate([''], {queryParams: {user: input.value.replace(/ /g, '')}});
    input.value = '';
  }

}
