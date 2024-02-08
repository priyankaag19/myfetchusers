import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirebaseService } from './firebase.service';

@NgModule({
    // declarations: [AppComponent],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase with environment configuration
    // AngularFirestoreModule,
    // AngularFirestoreModule.enablePersistence(),
    MatListModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [
    //  { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig } 
    // { provide: USE_EMULATOR, useValue: ['localhost', 4200] },
  ],

})
export class AppModule { }
