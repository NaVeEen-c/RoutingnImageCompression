import { Component, OnInit, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AllusersService } from '../allusers.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent  {
  userList=inject(AllusersService)
  allUsers:any=[]
  newUser=0
 
constructor(private router: Router) {}
  registerForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    re_password:new FormControl('')

  })
 
  handleSubmit(){
    if(this.registerForm.value.password===this.registerForm.value.re_password){
      console.log('enter')
      this.userList.currentUsers.subscribe(users=>{
        if(users===null){
          this.allUsers=[this.registerForm.value]
          console.log('if')
          
        }
        else{
          console.log('else')
          for(let user of users){
            if (user.email===this.registerForm.value.email){
              this.newUser=1
             
              console.log(this.newUser)
              break
            }
          }
          if(this.newUser!==1){
            this.allUsers=[this.registerForm.value,...users]
          }
          
        
       
        
        }
        
      })
      
      if (this.newUser!==1){
        this.router.navigate(['/users'])
        this.userList.updateUsers(this.allUsers)
      }

      
      
  

    }
        
    
    

  }
}
