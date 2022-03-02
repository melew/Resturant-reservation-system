import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm !: FormGroup;
  


  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
   }

   login(){
     this.http.get<any>("http://localhost:7000/login")
     .subscribe(res=> {
       const user = res.find((a:any)=>{
         return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
       });
       if(user){
         alert("Login Successful");
         this.loginForm.reset();
         this.router.navigate(['customer-view-reservations'])
       }else{
         alert("Incorrect user credentials")
       }

      console.log(this.loginForm.value);
       });
   }

   testPathCustomer():void {
    this.router.navigate(['customer-view-reservations'])
   }


}
