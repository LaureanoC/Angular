import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { GameComponent } from './components/game/game.component';
import { ProductoService } from './services/producto.service';

import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, UserComponent, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  saludo(){
    alert('Hola')
  }

  favorito = ''

  getFavorite(fav:string){
    this.favorito = fav 
  }

  private readonly productService = inject(ProductoService)
  products$ = this.productService.getAllProducts()

}
