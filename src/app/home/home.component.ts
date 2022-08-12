import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../autenticacao/token/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  haveToken: boolean = this.tokenService.possuiToken();

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {

    if (!this.tokenService.possuiToken()) {
      this.router.navigate(['login']);
      return;
    }

    this.router.navigate(['home']);
  }


}
