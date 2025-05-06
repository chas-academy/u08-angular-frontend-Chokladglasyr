import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  token!: string | null;
  constructor(private tokenService: TokenService){
    this.token = this.tokenService.getToken();
    // console.log(this.token)
  }
}
