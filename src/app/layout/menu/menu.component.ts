import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/autenticacao/token/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  haveToken = this.tokenService.possuiToken();
  
  constructor(
    private tokenService: TokenService,
    private router: Router
    ) { }
    
    ngOnInit(): void {
      
      this.haveToken = this.tokenService.possuiToken();
    }
    
    logOut() {
      this.tokenService.excluiToken();
      this.haveToken = this.tokenService.possuiToken();
      this.router.navigate(['/login']);
  }

}
