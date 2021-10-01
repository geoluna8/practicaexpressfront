import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PracticaService } from '../../services/practica.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  public persona = new Persona("","",0,0);

  constructor( private _service: PracticaService ) { }

  public enviar(): void{
    this._service.setData(this.persona).subscribe(
      (data: any) => { console.log(data); },
      (err: any) => { console.log(err); },
      () => { console.log("alta exitosa!"); alert("alta exitosa"); }
    );
  }

  ngOnInit(): void {
  }

}
