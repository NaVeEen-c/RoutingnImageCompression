import { Component, OnInit, inject} from '@angular/core';

import { AllusersService } from '../allusers.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit{
 
  allUsers=inject(AllusersService)
  
  usersList:any=[]
  constructor(){}
  ngOnInit(): void {
    
    
    this.allUsers.currentUsers.subscribe(prev=>{
      if (prev!==null){
        this.usersList=prev
        
      }

    })
    console.log(this.usersList,'users')
    
    
  }
  


}
