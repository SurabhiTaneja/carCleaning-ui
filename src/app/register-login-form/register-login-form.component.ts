import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {  AuthenticationService } from '../services/index';


@Component({
  selector: 'app-register-login-form',
  templateUrl: './register-login-form.component.html',
  styleUrls: ['./register-login-form.component.css']
})
export class RegisterLoginFormComponent implements OnInit {
  model: any = {};
    loading = false;
  formdata;
  emailid;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    //private alertService: AlertService) { }
    ) {
    
   }

  ngOnInit() {
    this.authenticationService.logout();
    //this.todaydate = this.myservice.showTodayDate();
      // this.formdata = new FormGroup({
      //    emailid: new FormControl("angular@gmail.com"),
      //    passwd: new FormControl("abcd1234")
      // });
  }
  //onClickSubmit(data) {this.emailid = data.emailid;}
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                //this.router.navigate([this.returnUrl]);
                alert(this.model.username);
            },
            error => {
                //this.alertService.error(error);
                this.loading = false;
            });
}
}
