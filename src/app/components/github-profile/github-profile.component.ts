import { GitProfileService } from '../../services/git-profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private profileService: GitProfileService) { 
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
    })
  }

  ngOnInit(): void {
  }

}
