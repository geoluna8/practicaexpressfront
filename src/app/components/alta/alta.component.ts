import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Persona } from '../../models/persona.model';
import { PracticaService } from '../../services/practica.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  public persona = new Persona("","",0,0);

  constructor( private _router: Router, private _service: PracticaService ) { }

  public enviar(): void{
    this._service.setData(this.persona).subscribe(
      (data: any) => { console.log(data); },
      (err: any) => { console.log(err); },
      () => { console.log("alta exitosa!"); this.showSWAL(); }
    );
  }

  ngOnInit(): void {
  }

  private showSWAL(){
    Swal.fire({
      title: 'Correcto!',
      text: 'Alta exitosamente',
      icon: 'success',
      confirmButtonText: 'Continuar!'
    }).then((result) =>{
      if(result.isConfirmed){
        this._router.navigate(['/main']);
      }
    });
  }

}
