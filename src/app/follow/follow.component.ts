import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../service/github.service';
import { Profile } from 'interfaces/profile';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  following: string[];
  users: Profile[];

  constructor(private route: ActivatedRoute, private service: GithubService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.service.getUserFollowing(params.get('user') ? params.get('user') : 'octocat')
        .subscribe( res => { this.following = res.map(x => x.login); }, alert);
    });
  }
}
