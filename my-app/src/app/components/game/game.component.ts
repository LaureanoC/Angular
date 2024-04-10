import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  games = [
    {
      id:1,
      name:'Bloodborne'
    },
    {
      id:2,
      name:'Horizon'
    },
    {
      id:3,
      name:'Sekiro'
    }
  ]
}
