import { Component, OnInit } from '@angular/core';
import { TelefoniaList } from './telefoniaList.model';
import { Telefoni } from './telefonia.model';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  telefoniForm: FormGroup;
  Telefoni: Telefoni[] = TelefoniaList;
  telefonoSelezionato: Telefoni;

  constructor(fb: FormBuilder) {
    this.telefoniForm = fb.group({
      'nome': ['', Validators.required],
      'cognome': ['', Validators.required],
      'email': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSelect(telefono: Telefoni): void {
    this.telefonoSelezionato = telefono;
  }

  onSubmit(): void {

    let telefono: Telefoni = new Telefoni();
    telefono.nome = this.telefoniForm.controls['nome'].value;
    telefono.cognome = this.telefoniForm.controls['cognome'].value;
    telefono.email = this.telefoniForm.controls['email'].value;

    this.Telefoni.push(telefono);
  }
}
