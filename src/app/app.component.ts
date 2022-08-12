import { Component } from '@angular/core';
import { TokenService } from './autenticacao/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  private tokenService = new TokenService();
  title = 'ford-14';
  haveToken = this.tokenService.possuiToken();
}
