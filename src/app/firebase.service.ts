import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }

  updateUserStatus(userId: string, disabled: boolean): Promise<void> {
    return this.firestore.collection('users').doc(userId).update({ disabled });
  }
}
