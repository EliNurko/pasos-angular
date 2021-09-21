import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {  

  login = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(5) ,Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
  })

  get usuario() {
    return this.login.get('usuario');
  }

  get pass() {
    return this.login.get('pass');
  }
  
  get email() {
    return this.login.get('email');
  }

  ngOnInit(): void {}

}
