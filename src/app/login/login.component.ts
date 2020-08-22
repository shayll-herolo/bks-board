import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginInvalid: boolean;
  loginSub: Subscription;
  returnUrl: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.authService.userValue) {
      this.router.navigate(['']);
    }

    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loginInvalid = false;

    if (this.form.valid) {
      this.loading = true;
      const { user, password } = this.form.value;
      this.loginSub = this.authService
        .login(user, password)
        .pipe(first())
        .subscribe({
          next: () => {
            this.router.navigate([this.returnUrl]);
            this.loading = false;
          },
          error: () => {
            this.loginInvalid = true;
            this.loading = false;
          },
        });
    }
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
