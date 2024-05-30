import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  //Navega para o topo da página ao clicar no botão fixado
  scrollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
