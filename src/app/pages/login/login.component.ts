import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { MockApiService } from "../../../client/mock-api.service";

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    invalidLogin: boolean = false;
    users: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private api: MockApiService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }

        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.api.getUser().subscribe((data: any[]) => {
            this.users = data;
        })

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.invalidLogin = true;
            return;
        }

        for(let i=0 ; i < this.users.length; i++) {
            if (this.users[i].username === this.f.username.value && this.users[i].password === this.f.password.value) {
                this.authenticationService.login(this.users[i]);
                this.router.navigate([this.returnUrl]);
                break;
            } else {
                this.invalidLogin = true;
            }
        }
    }
}
