import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId":"fetchdatauser",
      "appId":"1:777052518883:web:227041efcd4aa5e39748d6",
      "databaseURL":"https://fetchdatauser-default-rtdb.firebaseio.com",
      "storageBucket":"fetchdatauser.appspot.com",
      "apiKey":"AIzaSyDhcxRWqV_qj9vfJ9Et1dGrvmuZoAVeYyA",
      "authDomain":"fetchdatauser.firebaseapp.com",
      "messagingSenderId":"777052518883",
      "measurementId":"G-YPXVQ023RM"
    }))),
    importProvidersFrom(provideAnalytics(() => getAnalytics())), 
    ScreenTrackingService, 
    importProvidersFrom(provideFirestore(() => getFirestore())), 
    importProvidersFrom(provideStorage(() => getStorage())),
    provideAnimationsAsync('noop'), provideAnimationsAsync()
  ]
};
