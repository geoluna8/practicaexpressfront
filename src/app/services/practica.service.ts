import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PracticaService {

private apiExpress: string = environment.url;

constructor( private _http: HttpClient ){}

    public getData(): any {
        return this._http.get(this.apiExpress + '/personas');
    }

    public setData(persona: any): any {
        console.log(this.apiExpress + '/personas', persona);
        return this._http.post(this.apiExpress + '/personas', persona)
    }

    public getOne(id : any): any {
        console.log(id);
        return this._http.post(this.apiExpress + '/personas/' + id, id);
    }

    public saveOne(persona: any): any{
        console.log(persona);
        return this._http.put(this.apiExpress + '/personas/' + persona._id, persona);
    }

    public deleteOne(id: any): any {
        console.log("borrar: ", id);
        return this._http.delete(this.apiExpress + '/personas/' + id, id);
    }

}