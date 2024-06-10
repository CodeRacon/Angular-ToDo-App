import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex()];

  get imgPath() {
    return 'assets/img/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    this.selectedUser = DUMMY_USERS[randomIndex()];
  }
}
