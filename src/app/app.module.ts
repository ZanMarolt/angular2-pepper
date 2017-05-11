import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBXivv71hDhDFBJ1GzSshf_j87r8XcRG7U",
  authDomain: "pepper-9ed79.firebaseapp.com",
  databaseURL: "https://pepper-9ed79.firebaseio.com",
  projectId: "pepper-9ed79",
  storageBucket: "pepper-9ed79.appspot.com",
  messagingSenderId: "476098312415"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
