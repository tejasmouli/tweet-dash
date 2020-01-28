import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GithubService } from '../service/github.service';
import { Profile } from 'interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = 'octocat';

  profile: Profile;

  constructor(private route: ActivatedRoute, private service: GithubService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.service.getUser(params.get('user') ? params.get('user') : 'octocat')
        .subscribe( res => this.profile = res, alert);
    });
  }

}
