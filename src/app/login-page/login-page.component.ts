import { Component, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { AllusersService } from '../allusers.service';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm=new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })
  
  allUsers=inject(AllusersService)
  loggedUser:string=""
  userexists=1
  handleSubmit(){
    this.allUsers.currentUsers.subscribe(users=>{
      console.log(users)
      if(users!==null){
      users.map((user:any)=>{
        if (user.email===this.loginForm.value.email && user.password===this.loginForm.value.password){
          
          this.loggedUser=user.name
          this.userexists=2
          
          

        }
        else{
          this.userexists=3
        }
      })}
      else{
        this.userexists=4
      }
    })
    
   
  }

}
