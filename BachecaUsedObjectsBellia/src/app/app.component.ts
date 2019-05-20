import { Component } from '@angular/core';
import { TelefoniaList } from './telefoniaList.model';
import { Telefonia } from './telefonia.model';
import { Telefoni } from './telefoni.model';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = "Benvenuti alla telefonia";
  telefonie = TelefoniaList;
  selectedTelefonia: Telefonia;
  telefoniList: Telefoni[];
  telefoniForm: FormGroup;

  constructor(public fb: FormBuilder) { }
  ngOnInit() {
  telefoniForm: FormGroup;
  this.telefoniForm = this.fb.group({
      nomeControl: ['', Validators.required],
      cognomeControl: ['', Validators.required],
      emailControl: ['', Validators.required],
    });

    this.telefoniList = new Array <Telefoni>();
  }


  //Nell'html impostare l'html <option [ngValue]="room" ... permette di passare un oggetto 
  onChange() {
    //In questo modo ottengo l'oggetto selezionato
    this.selectedTelefonia = this.telefoniForm.controls['telefoniaControl'].value;
  }

  onSubmit(): boolean {
    let nome = this.telefoniForm.controls['nomeControl'].value;
    let cognome = this.telefoniForm.controls['cognomeControl'].value;
    let email = this.telefoniForm.controls['emailControl'].value;
   
    this.telefoniList.push(new Telefoni(nome, cognome, email));
    return false;
  }
}
