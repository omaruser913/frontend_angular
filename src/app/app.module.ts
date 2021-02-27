import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos los modulos para el funcionamiento ng
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importar componentes
import { RegistroComponent } from './registro/registro.component';
import { TablaComponent } from './tabla/tabla.component';
import { EditarRegistrosComponent } from './editar-registros/editar-registros.component';

//importamos las conexiones remotas
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RegistroComponent,
    TablaComponent,
    EditarRegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
HttpClientModule