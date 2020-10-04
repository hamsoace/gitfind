import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GitProfileService {

  private userName:string;
  private clientId = 'c2cbd7d38078abafd008';
  private clientSecret = '4cb4d3ccc2484b813730aefc836261db89e23e6e';
  constructor(private http:HttpClient) { 
    console.log("services are ok");
    this.userName = 'hamsoace';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
}

//d1129cc247d6222659f676ccca25e7615d0524fa TOKEN ID
