import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 style="text-align: center;">Pokedex procuravel com rotas</h1><router-outlet></router-outlet><app-card></app-card>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
}
