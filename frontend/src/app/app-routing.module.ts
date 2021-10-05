import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './shared/auth.guard';
import { SingInComponent } from './sing-in/sing-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SingInComponent },
  { path: 'sign-in', component: SingInComponent },
  { path: 'controle-de-medicamentos', component: PainelComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
