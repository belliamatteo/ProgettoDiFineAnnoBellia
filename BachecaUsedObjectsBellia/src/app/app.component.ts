import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fantallenatore } from "./fantallenatore";
import { Fantallenatori } from './mock-fantallenatori';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  LoginForm: FormGroup;
  fantallenatori = Fantallenatori;
  nomeFantallenatoreOnline: string = null;
  cognomeFantallenatoreOnline: string = null;
  squadra:string = null;
  emailFantallenatoreOnline : string = null;
  logoutEffettuato: boolean = false;
  schiacciaLogin : boolean = false;
  loginEffettuato: boolean = false;
  registerEffettuato: boolean = false;
  pwemailsbagliata : boolean = false;
  a : boolean = false;
  b : boolean = false;
  l : boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['', Validators.required], 'cognome': ['', Validators.required], 'squadra': ['', Validators.required], 'password': ['', Validators.required], 'email': ['', Validators.compose([Validators.required, Validators.email])]});
    this.LoginForm = fb.group({'email': ['', Validators.compose([Validators.required, Validators.email])], 'password': ['', Validators.required]});
  }

    onSubmit(): boolean {
      if(this.myForm.valid){
        let fantallenatore : Fantallenatore = new Fantallenatore();
        fantallenatore.nome = this.myForm.controls['nome'].value;
        fantallenatore.cognome = this.myForm.controls['cognome'].value;
        fantallenatore.squadra = this.myForm.controls['squadra'].value;
        fantallenatore.password = this.myForm.controls['password'].value;
        fantallenatore.email = this.myForm.controls['email'].value;
        this.fantallenatori.push(fantallenatore);
        this.logoutEffettuato = false
        this.registerEffettuato = true;
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }

    login(): boolean {
      if(this.LoginForm.valid){
        for(let a of this.fantallenatori){
          if(this.LoginForm.controls['email'].value == a.email){
            if(this.LoginForm.controls['password'].value == a.password){
              this.cognomeFantallenatoreOnline = a.cognome;
              this.nomeFantallenatoreOnline = a.nome;
              this.squadra = a.squadra;
              this.emailFantallenatoreOnline = a.email;
              this.logoutEffettuato = false;
              this.schiacciaLogin = true;
              this.loginEffettuato = true;
              this.pwemailsbagliata = false;
              this.l = true;
              break;
            } else {
              this.pwemailsbagliata = true;
            }
          } else {
            this.pwemailsbagliata = true;
          }
        }
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }

    logout(){
        this.nomeFantallenatoreOnline = null;
        this.cognomeFantallenatoreOnline = null;
        this.squadra = null;
        this.emailFantallenatoreOnline = null;
        this.logoutEffettuato = true;
        this.schiacciaLogin = false;
        this.loginEffettuato = false;
        this.l = false;
    }

    hidea(){
        if (this.a == false){
            this.a = true;
        }else{
            this.a = false;
        }
    }

    hideb(){
        if (this.b == false){
            this.b = true;
        }else{
            this.b = false;
        }
    }
}
