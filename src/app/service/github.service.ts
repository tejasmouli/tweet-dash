import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Profile } from 'interfaces/profile';
import { Repo } from 'interfaces/repo';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    URL = 'https://api.github.com/users/';

    constructor(private http: HttpClient) { }

    getUser(username: string): Observable<Profile> {
        return this.http.get<Profile>(this.URL + username);
    }

    getUserFollowing(username: string): Observable<Profile[]> {
        return this.http.get<Profile[]>(this.URL + username + '/following');
    }

    getUserRepos(username: string): Observable<Repo[]> {
        return this.http.get<Repo[]>(this.URL + username + '/repos');
    }

    getfullUser(login: string): Profile {
        let user: Profile;
        this.getUser(login).subscribe(res => user = res, alert);
        return user;
    }

}
