import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements OnInit {
  users$!: Observable<any[]>;

  constructor(private firebaseService: FirebaseService) {}
 
  ngOnInit(): void {
    this.users$ = this.firebaseService.getUsers();
  }

  updateUserStatus(userId: string, disabled: boolean) {
    this.firebaseService.updateUserStatus(userId, !disabled);
  }
}
