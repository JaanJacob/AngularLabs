import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  name: "josh";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
    });
  }

}
