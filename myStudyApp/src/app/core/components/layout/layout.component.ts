import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  title = 'my-study-app';

  userLogged: boolean = true;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });
  }

  private checkRoute(url: string) {
    if (url.includes('login')) {
      this.userLogged = false;
    } else if (url.includes('home')) {
      this.userLogged = true;
    }
  }

  logout(res: any) {
    this.userLogged = res;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
