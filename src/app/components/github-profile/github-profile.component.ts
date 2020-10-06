import { GitProfileService } from '../../services/git-profile.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile, Repo } from '../../user';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  

  profile:any[];
  repos: any[];
  userName:string;
  


  constructor(private profileService: GitProfileService, private http:HttpClient ) { 
    
  }

  findProfile(){
  	this.profileService.updateProfile(this.userName);
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  ngOnInit() {
  }

}
