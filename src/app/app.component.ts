import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user = 'octacat';

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  navigate(input: any) {
    this.router.navigate(['/'], {queryParams: {user: input.value}});
    input.value = '';
    this.ngOnInit();
  }

  ngOnInit() { }

}
