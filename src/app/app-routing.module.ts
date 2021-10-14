import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AltaComponent } from './components/alta/alta.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { NotfoundComponent  } from './components/notfound/notfound.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'alta', component: AltaComponent},
  {path: 'actualizar', component: ActualizarComponent},
  {path: '**', component: NotfoundComponent}
];

/*agregar forRoot(routes, {useHash: true, enableTracing: false}) para funcionamiento en server*/
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
