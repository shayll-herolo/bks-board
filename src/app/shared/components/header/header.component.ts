import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services';
import { MatDialog } from '@angular/material/dialog';
import { EditPostDialogComponent } from '../dialogs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  logoClick() {
    console.log('clicked');
    this.router.navigate(['']);
  }

  logout() {
    this.authService.logout();
  }

  addPost() {
    const {firstName, lastName} = this.authService.userValue;
    this.dialog.open(EditPostDialogComponent, {
      height: '400px',
      width: '600px',
      data: {isEdit: false, author: `${firstName} ${lastName}`}
    });
  }

}
