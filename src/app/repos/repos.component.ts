import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../service/github.service';
import { Profile } from 'interfaces/profile';
import { Repo } from 'interfaces/repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  allRepos: Repo[];

  constructor(private route: ActivatedRoute, private service: GithubService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      console.log('From repos ' + params.get('user'));
      this.service.getUserRepos(params.get('user') ? params.get('user') : 'octocat')
        .subscribe( res => {this.allRepos = res; console.log(res); }, err => alert);
    });
  }

}
