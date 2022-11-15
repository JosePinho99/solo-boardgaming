import { Component } from '@angular/core';
import { Game } from './interfaces/games';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentGame: string = 'Under Falling Skies';

  games: Game[] = [ 
    {name: 'Under Falling Skies', url: 'https://cf.geekdo-images.com/ecO5eAd3RkctQ0-Tbqv37Q__opengraph/img/PBWHsNY7XtPjT0w1YgH7hurmQXA=/fit-in/1200x630/filters:strip_icc()/pic5428723.jpg'},
    {name: 'Spirit Island', url: 'https://gglounge.pt/wp-content/uploads/2021/01/spirit-island.png'},
    {name: 'Marvel Champions the Card Game', url: 'https://cf.shopee.co.id/file/d9de04d1f530a71fdd8c75e1937ec679'},
    {name: '7 Wonders Duels', url: 'https://www.worten.pt/i/ef036dbc31a07013e0e4890c1e279c2f647aa271.jpg'},
    {name: 'Gloomhaven', url: 'https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__opengraph/img/XDh_MXme0-wpRJ_IsOcDjEgdvTQ=/fit-in/1200x630/filters:strip_icc()/pic2437871.jpg'},
    {name: 'Mage Knight', url: 'https://cf.geekdo-images.com/jgsT5y5qKlOR08CuHG7xfw__opengraph/img/Oxu1AoCH5j-t8p_vtWHndHO2ug8=/fit-in/1200x630/filters:strip_icc()/pic4411189.jpg'},
    {name: 'Lost Ruins of Arnak', url: 'https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__opengraph/img/AlNdVDyzjKgZvD-WSzGWReevLG0=/fit-in/1200x630/filters:strip_icc()/pic5674958.jpg'},
    {name: 'Terraforming Mars', url: 'https://cdn.shopify.com/s/files/1/0505/8019/3473/products/sg6005_web_front_530x@2x.jpg?v=1629403762'},
    {name: 'Wingspan', url: 'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__opengraph_left/img/Y56_Jk3PR0n9JgFqkVWcHV0MClQ=/fit-in/445x445/filters:strip_icc()/pic4458123.jpg'}
  ]

  openGame(game: Game) {
    this.currentGame = game.name;
  }
}
