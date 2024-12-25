import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string = '';
  password: string = '';

  constructor(
    private authService: AuthService
  ) {}

  onLogin(): void {
    if (!this.login || !this.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    this.authService.login(this.login, this.password).subscribe({
      next: (response) => {
        console.log('login bem sucedido', response);
        localStorage.setItem('token', response.token);
        alert('Login realizado com sucesso!');        
      },
      error: (error) => {
        console.error('erro ao logar', error);
        console.log('body', this.login, this.password);
      }
    });    
  } 


}
