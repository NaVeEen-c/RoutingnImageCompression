import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {
  // allUsers=new BehaviorSubject<Array<{
  //   name:string,
  //   email:string,
  //   password:string,
  //   re_password:string
  // }>>([])
  exist=0
  allUsers=new BehaviorSubject<any>(null)
  currentUsers=this.allUsers.asObservable()
  constructor() { }
  
  updateUsers(newuser:any):Number{
    this.exist=0
   
    const currentArray=this.allUsers.getValue()
    if(currentArray===null){
      this.allUsers.next([newuser])
      return 1
      
    }
    

    if(currentArray!==null && newuser!==null){
      for(let user of currentArray){
        if(user.email===newuser.email){
          this.exist=1
          
          return 0
          
        }

      }
      if(this.exist!==1){
        const updatedArray = [...currentArray, newuser];
      this.allUsers.next(updatedArray)
      return 1
      
      }
      
      
    }
    return 0
  }
}
