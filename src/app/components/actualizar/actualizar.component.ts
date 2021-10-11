import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracticaService } from '../../services/practica.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  public persona = new Persona("","",0,0);

  constructor( private route:ActivatedRoute, private _service: PracticaService ) { }

  public guardar(): void{
    this._service.saveOne(this.persona).subscribe(
      (data: any) => { console.log("actualizado! ", data); },
      (error: any) => { console.log(error); },
      () => {}
    );
  }

public buscar(id: string): void{
  this._service.getOne(id).subscribe(
    (data: any) => {console.log(data); this.persona = data},
    (error: any) => {},
    () => {}
    );
} 

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params : any) => {console.log(params.params.id); this.buscar(params.params.id); });
  }

}
