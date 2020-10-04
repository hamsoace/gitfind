import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GitProfileService } from './services/git-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [GitProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
