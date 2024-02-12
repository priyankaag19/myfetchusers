import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, DocumentData, DocumentReference, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getUsers(): Observable<any[]> {
    const usersCollection = collection(this.firestore, 'users');
    return collectionData(usersCollection);
  }

  updateUserStatus(userId: string, disabled: boolean): Promise<void> {
    const userDocRef: DocumentReference<DocumentData> = doc(this.firestore, 'users', userId);
    return updateDoc(userDocRef, { disabled });
  }
}

