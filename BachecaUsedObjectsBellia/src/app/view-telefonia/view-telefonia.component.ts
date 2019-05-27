import { Component, OnInit, Input } from '@angular/core';
import { Telefoni } from '../telefoni.model';

@Component({
  selector: 'app-view-telefonia',
  templateUrl: './view-telefonia.component.html',
  styleUrls: ['./view-telefonia.component.css']
})
export class ViewTelefoniaComponent implements OnInit {
  
  @Input() telefono: Telefoni;

  constructor() { }

  ngOnInit() {
  }

}
