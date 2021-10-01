import { Component, OnInit } from '@angular/core';
import { PracticaService } from '../../services/practica.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public datosApi: any;

  constructor( private _service: PracticaService ) { }

  private getData(): any {
    this._service.getData().subscribe(
      (data: any) => { this.datosApi = data; console.log(data); },
      (err: any) => { console.log(err); },
      () => { console.log("api consultada"); }
    );
  }

  ngOnInit(): void {
    this.getData();
  }

}
