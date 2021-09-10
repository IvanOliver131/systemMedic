import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './shared/auth.guard';
import { SingInComponent } from './sing-in/sing-in.component';

const routes: Routes = [
  { path: '', component: SingInComponent },
  { path: 'sing-in', component: SingInComponent },
  { path: 'painel', component: PainelComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
