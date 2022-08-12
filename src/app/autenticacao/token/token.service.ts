import { Injectable } from '@angular/core';

const kEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornaToken() {
    return localStorage.getItem(kEY) ?? '';
  }
  salvaToken(token: string){
    localStorage.setItem(kEY, token);
  }
  excluiToken() {
    localStorage.removeItem(kEY);
  }
  possuiToken() {
    return !!this.retornaToken();
  }
}
