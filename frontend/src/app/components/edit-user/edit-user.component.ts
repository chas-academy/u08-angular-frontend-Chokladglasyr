import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-user',
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  constructor(private auth: AuthService, private router: Router){}

  logout(): void {
    this.auth.logOut();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
