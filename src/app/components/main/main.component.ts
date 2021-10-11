import { Component, OnInit } from '@angular/core';
import { PracticaService } from '../../services/practica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public datosApi: any;

  constructor( private _router: Router, private _service: PracticaService ) { }

  private getData(): any {
    this._service.getData().subscribe(
      (data: any) => { this.datosApi = data; console.log(data); },
      (err: any) => { console.log(err); },
      () => { console.log("api consultada"); }
    );
  }

  public goToUpdate(_id: string){
    this._router.navigate(['/actualizar'], {queryParams: {id: _id}});
  }

  public deleteOne(id: string): void{
    //let persona: any = {_id: id} 
    this._service.deleteOne(id).subscribe(
      (data: any) => { console.log(data); },
      (error: any) => { console.log(error); },
      ()=> { console.log("registro borrado"); this.getData(); }
    );
  }

  ngOnInit(): void {
    this.getData();
  }

}
