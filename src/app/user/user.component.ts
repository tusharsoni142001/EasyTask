import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from "./user.model";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required:true}) user!: User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>
  // avatar = input<string>();
  // name = input.required<string>();


  // selectedUser = signal (DUMMY_USERS[randomIndex]) ;

  // imgPath = computed(() => "users/"+this.avatar());
  get imgPath()
  {
    return "users/" + this.user.avatar;
  }

  onUserSelect()
  {
    return this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
