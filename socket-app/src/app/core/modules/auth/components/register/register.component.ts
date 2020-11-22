import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { distinctUntilChanged } from 'rxjs/operators';

import { Register } from 'app/core/state/auth-state/auth.actions';

import { IAuthData } from 'lib/interfaces/auth-data';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public ngOnDestroy() {}

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });

    const emailField = this.form.get('email');

    emailField.valueChanges.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe(value => {
      emailField.setValue(value.toLowerCase());
    });
  }

  public onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;
    const authData: IAuthData = {
      email: email.trim(),
      password: password
    };

    this.store.dispatch(new Register(authData));
  }
}
