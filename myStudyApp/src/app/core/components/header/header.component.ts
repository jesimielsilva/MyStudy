import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDarkMode: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  
  ngOnInit(): void {
    // Verifica o estado salvo no localStorage ao inicializar o componente
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
      this.renderer.addClass(this.document.body, 'dark-mode');
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  toggleContrast(event: Event): void {
    event.preventDefault();
    this.isDarkMode = !this.isDarkMode;
    const hasDarkMode = this.document.body.classList.contains('dark-mode');
    if (hasDarkMode) {
      this.renderer.removeClass(this.document.body, 'dark-mode');
      localStorage.setItem('dakrMode', 'false');
    } else {
      this.renderer.addClass(this.document.body, 'dark-mode');
      localStorage.setItem('darkMode', 'true');
    }
  }
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }



  onGovLinkClick() {
    throw new Error('Method not implemented.');
    }
userLogged: any;
logout() {
throw new Error('Method not implemented.');
}

}
