import { ErrorStateMatcher } from '@angular/material/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/Interfaces/IUser';
import { UserService } from 'src/app/user.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-account-info-page',
  templateUrl: './account-info-page.component.html',
  styleUrls: ['./account-info-page.component.css']
})
export class AccountInfoPageComponent implements OnInit {

  hide = true;

  user:IUser = {
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: ""
  }

  updateUser(data:any):void{
    //this.userService.updateUser(data).subscribe(),
    console.log("updateUser Called");
    if(!this.confirmUpdate()){
      return;
    }

      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.phoneNumber = data.phoneNumber;

    console.log(this.user);

    this.userService.update(this.user)
    .subscribe(response=>{
      console.log(response);
    });

    //alert("Your account has been updated successfuly");
  }

  confirmUpdate(): boolean{
     if(window.confirm("Confirm Changes?")){
       return true;
     } else {
       return false;
     }
   }

 
  constructor(
    //private userService:UserService
    private userService:UserServiceService
    ) { }

  
  ngOnInit(): void {
    //should grab the id of the user and put it in here
    /*
    this.userService.info(this.cookieService.get(#id))
    //replace below
    */
    this.userService.info(1)
    .subscribe((data =>{
      console.log(data)
      this.user.userId = data.userId;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.userType = data.userType;
      this.user.phoneNumber = data.phoneNumber;
    }));
  }
  

  

}
