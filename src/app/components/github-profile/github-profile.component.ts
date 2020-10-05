import { GitProfileService } from '../../services/git-profile.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile, Repo } from '../../user';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  
  profile:Profile;
  repos: Repo[];
  userName:string;
  


  constructor(private profileService: GitProfileService, private http:HttpClient ) { 
    
  }

  findUser(){
    this.profileService.updateProfile(this.userName)

    this.profileService.getUserProfile().subscribe((profile:any)=>{
      this.profile = profile.json()
    });

    this.profileService.getRepo().subscribe((repos:any)=>{
      this.repos = repos.json()
    })
  }

  ngOnInit(): void {
  }

}
