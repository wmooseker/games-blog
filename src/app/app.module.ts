import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';

import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireStorageModule} from '@angular/fire/storage';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ShellComponent } from './shell/shell.component';
import {MatButtonModule} from '@angular/material/button';
import { ArticleModule } from './articles/article.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    ArticleModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
