import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientComponent } from './pacient/pacient.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './shared/auth.guard';
import { SingInComponent } from './sing-in/sing-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SingInComponent },
  { path: 'sign-in', component: SingInComponent },
  { path: 'controle-de-medicamentos', component: PainelComponent, canActivate: [AuthGuard] },
  { path: 'controle-de-pacientes', component: PacientComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
