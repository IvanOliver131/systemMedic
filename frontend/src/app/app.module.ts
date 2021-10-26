import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user/user.service';
import { AuthGuard } from './shared/auth.guard';
import { RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { PacientComponent } from './pacient/pacient.component';
import { NgxMaskModule } from 'ngx-mask';
import { RetiradaComponent } from './retirada/retirada.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PainelComponent,
    SingInComponent,
    PacientComponent,
    RetiradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    UserService,
    AuthGuard,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
