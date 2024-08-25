import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;
  search = '';

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pikachu';
    this.monster1.hp = 40;
    this.monster1.figureCaption = 'N°002 Pikachu';
  }

  increaseCount() {
    this.count++;
  }
}
