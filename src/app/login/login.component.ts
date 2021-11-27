import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

imports: [
  FormsModule
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  screen = "";
  a = "";
  b = "";
  c = "";
  d = "";
  e = "";


  ngOnInit(): void {
  }
  entervalue(value = "0"){
    if((this.b == "+") || (this.b == "-") || (this.b == "x") || (this.b == "/")){






      this.d = this.d + value;
      this.screen = this.screen + value;
      this.c = this.d;

    }
    else{
      this.screen = this.screen + value;
      this.a = this.screen;
    }
  }
  condition(value = "0"){
    this.screen = this.screen + value;
    this.b = value;
  }
  clear(){
    this.screen = "";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";




  }

  objectArray : number[] = [];


  result(){
    if(this.b == "+"){

      this.screen = this.screen + "=" + (parseInt(this.a) + parseInt(this.c)).toString;
      this.screen = (parseInt(this.screen) + parseInt(this.c)).toString();

      this.objectArray.push(parseInt(this.screen) + parseInt(this.c));
      console.log(this.objectArray)
    }

    if(this.b == "-"){

      this.screen = this.screen + "=" + (parseInt(this.a) - parseInt(this.c)).toString;
      this.screen = (parseInt(this.screen) - parseInt(this.c)).toString();
    }

    if(this.b == "x"){

      this.screen = this.screen + "=" + (parseInt(this.a) * parseInt(this.c)).toString;
      this.screen = (parseInt(this.screen) * parseInt(this.c)).toString();
    }
    if(this.b == "/"){

      this.screen = this.screen + "=" + (parseInt(this.a) / parseInt(this.c)).toString;
      this.screen = (parseInt(this.screen) / parseInt(this.c)).toString();
    }
  }
}
