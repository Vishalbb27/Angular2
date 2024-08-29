// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   //State management mechanism using signal
//   slectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => '../../assets/users/' + this.slectedUser().avatar);

//   //Regular state management mechaninsm
//   // get imagePath() {
//   //   return '../../assets/users/' + this.slectedUser.avatar;
//   // }

//   onSelectedUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.slectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //using decorator
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  //Using Signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return '../../assets/users/' + this.avatar;
  // });
  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.id);
  }
}
