import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './login/add.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { ProfileService } from './services/profile.service';
import { MessageService } from './services/message.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProfileService, MessageService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
