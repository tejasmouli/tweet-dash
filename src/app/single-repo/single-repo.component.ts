import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'interfaces/repo';

@Component({
  selector: 'app-single-repo',
  templateUrl: './single-repo.component.html',
  styleUrls: ['./single-repo.component.css']
})
export class SingleRepoComponent implements OnInit {

  @Input()
  repo: Repo;

  constructor() { }

  ngOnInit() {
  }

}
