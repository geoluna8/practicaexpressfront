import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PracticaService } from '../../services/practica.service';
import { Persona } from '../../models/persona.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  public persona = new Persona("","",0,0);

  constructor( private route:ActivatedRoute, private _service: PracticaService, private _router: Router ) { }

  public guardar(): void{
    this._service.saveOne(this.persona).subscribe(
      (data: any) => { console.log("actualizado! ", data); },
      (error: any) => { console.log(error); },
      () => { this.showSWAL(); this._router.navigate(['/main']); }
    );
  }

public buscar(id: string): void{
  this._service.getOne(id).subscribe(
    (data: any) => {console.log(data); this.persona = data},
    (error: any) => {},
    () => {}
    );
} 

private showSWAL(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  
  Toast.fire({
    icon: 'success',
    title: 'Actualización Exitosa'
  });
}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params : any) => {console.log(params.params.id); this.buscar(params.params.id); });
  }

}
