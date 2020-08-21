import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router"; 
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name= "";
  password= "";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(name){
    if (this.name == "jason" && this.password == "123"){
      this.router.navigate(['/account'], { queryParams: { name: name } });
    }else if (this.name == "john" && this.password == "123"){
      this.router.navigate(['/account'], { queryParams: { name: name } });
    }else if (this.name == "james" && this.password == "123"){
      this.router.navigate(['/account'], { queryParams: { name: name } });
    }else {
      alert ("Invalid User");
    }
    
  }

}
