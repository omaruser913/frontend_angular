//importar modulos de angular
import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
//importar componentes
import { RegistroComponent } from './registro/registro.component';
import { TablaComponent } from './tabla/tabla.component';
import { EditarRegistrosComponent } from './editar-registros/editar-registros.component';


//array de rutas
const appRoutes: Routes= [
    {path: 'registro', component:RegistroComponent},
    {path: 'tabla', component:TablaComponent},
    {path: 'editar/:id', component:RegistroComponent}
    //{path: 'editar-registros', component: EditarRegistrosComponent}
];

//exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
