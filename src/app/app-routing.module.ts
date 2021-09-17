import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
