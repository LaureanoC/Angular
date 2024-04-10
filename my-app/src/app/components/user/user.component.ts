import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() username = ''
  isLoggedIn = false

  @Output() addFavoriteEvent = new EventEmitter<string>()

  fav(apellido:string){
    this.addFavoriteEvent.emit(apellido)
  }

}
