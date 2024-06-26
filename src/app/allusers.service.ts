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
  allUsers=new BehaviorSubject<any>(null)
  currentUsers=this.allUsers.asObservable()
  constructor() { }
  updateUsers(users:any){
    
    if(users!==null){
     
      this.allUsers.next(users)
      
    }
    
  }
}
