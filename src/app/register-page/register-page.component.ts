import { Component, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllusersService } from '../allusers.service';
import { NgIf } from '@angular/common';
import { NgxImageCompressService } from 'ngx-image-compress';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent  {
  
  // orientation:any
  // image:any
  // image1:any
  
  userList=inject(AllusersService)
  
  newUser:Number=1
 
 
constructor(private router: Router,private imageCompress: NgxImageCompressService) {
  
}
  registerForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email
    ]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    re_password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    gender:new FormControl('',[Validators.required]),
    profession:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
     avatar:new FormControl('',[Validators.required]),
   

  })

compressedImage: string = '';
fileChange(event:any){
  const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log('original images size', this.imageCompress.byteCount(e.target.result));
        this.compressFile(e.target.result);

      };
      reader.readAsDataURL(file);

    }
    

  
}

compressFile(image: string): void {
  const orientation = -1; 
  this.imageCompress.compressFile(image, orientation, 50, 50).then(
    (result: string) => {
      this.registerForm.value.avatar=result;
      console.log('compressed images size', this.imageCompress.byteCount(result));
    }
  );
}

 
  handleSubmit(){



    if(this.registerForm.value.password===this.registerForm.value.re_password){
      console.log('enter')

      this.newUser= this.userList.updateUsers(this.registerForm.value)
      if(this.newUser===1){
        this.router.navigate(['./users'])
      }
      
    
  
    console.log('exit')
    
      
      
      
      
  

    }
  
        
    
    

  }
}
