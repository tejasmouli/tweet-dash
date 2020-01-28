import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'interfaces/profile';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.css']
})
export class SingleProfileComponent implements OnInit {

  @Input()
  login: string;

  user: Profile;

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getUser(this.login).subscribe(res => this.user = res, alert);
  }

}
