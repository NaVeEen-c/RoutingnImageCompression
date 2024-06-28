import { Component, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { AllusersService } from '../allusers.service';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,NgIf,NgFor],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),

  })
  loggedUser={name:'',
    email:'',
    gender:'',
    profession:'',
    address:'',
    avatar:'',}
  
  
  allUsers=inject(AllusersService)
 
  userexists:Number=0
  handleSubmit(){
    this.userexists=0
    this.allUsers.currentUsers.subscribe(users=>{
      if(users!==null){
      for(let User of users){
     
        if (User.email===this.loginForm.value.email){
          if(User.password===this.loginForm.value.password){
            this.loggedUser=User
            this.userexists=1
            console.log(this.userexists)
          }
          else{
            this.userexists=2
          }
          break
        }
      }
      if(this.userexists!==1 && this.userexists!==2){
        
        this.userexists=3
      }
    }
    else{
      this.userexists=3
    }
     
     
     



    })
    
   
  }

}
