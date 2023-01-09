import { TokenService } from './../../service/token.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css'],
})
export class LogoAPComponent {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) {}

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
