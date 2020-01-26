import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileComponent } from './profile/profile.component';
import { FollowComponent } from './follow/follow.component';
import { SingleProfileComponent } from './single-profile/single-profile.component';
import { ReposComponent } from './repos/repos.component';
import { SingleRepoComponent } from './single-repo/single-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FollowComponent,
    SingleProfileComponent,
    ReposComponent,
    SingleRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
