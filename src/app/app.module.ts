import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AltaComponent } from './components/alta/alta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { LoaderService } from './services/loader.service';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AltaComponent,
    NavbarComponent,
    FooterComponent,
    MyLoaderComponent,
    ActualizarComponent,
    NotfoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
