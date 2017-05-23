import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RedirectComponent } from './redirect/redirect.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  { path: 'login', component: LogInComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RedirectComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
