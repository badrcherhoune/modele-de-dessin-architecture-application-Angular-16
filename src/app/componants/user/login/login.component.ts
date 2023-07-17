import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userFormGroup! : FormGroup;
  public errormessage :any;


  constructor(private fb : FormBuilder ,
    private serviceAhtentufication: AuthentificationService,
    private router:Router
    
    ){}
  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      userName: this.fb.control(""),
      password: this.fb.control("")
    })
  }


  handelLogin(){
    let userName = this.userFormGroup.value.userName;
    let password = this.userFormGroup.value.password;
    this.serviceAhtentufication.connect(userName,password).subscribe({
      next: appUser=>{
        this.serviceAhtentufication.authentificate(appUser).subscribe({
          next: data=>{
            this.router.navigateByUrl("/dashboar");
          }
        })
      },error: err=> {
        this.errormessage = err;
        console.log(this.errormessage);
      }
    })
  }

}
