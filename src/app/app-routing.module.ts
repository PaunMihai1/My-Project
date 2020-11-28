import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CautareComponent } from './cautare/cautare.component';
import { DetaliiDepartamenteComponent } from './detalii-departamente/detalii-departamente.component';
import { ListaDepartamenteComponent } from './lista-departamente/lista-departamente.component';


const routes: Routes = [
  { path:'', redirectTo: '/persoane', pathMatch:'full' },
  { path: 'persoane', component: ListaDepartamenteComponent},
  { path: 'detalii/:id', component: DetaliiDepartamenteComponent },
  { path: 'cautare', component: CautareComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListaDepartamenteComponent,DetaliiDepartamenteComponent, CautareComponent]