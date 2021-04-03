import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { AppModule } from '../../app.module';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";


describe("LoginComponent", () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [AppModule],
                declarations: [LoginComponent]
            }).compileComponents().then(() => {
                fixture = TestBed.createComponent(LoginComponent);

                component = fixture.componentInstance;

                de = fixture.debugElement.query(By.css('form'));

                el = de.nativeElement;
            });
        })
    );

    it("should create login component", () => {
        expect(component).toBeTruthy();
    });

    it("should render panel with class of 'title' and content of 'Login'", () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.title').textContent).toContain('Login');
    });

    it("should call onSubmit method on form submit", () => {
        fixture.detectChanges();
        spyOn(component, 'onSubmit');
        el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(component.onSubmit).toHaveBeenCalledTimes(1);
    });

    it("form should be invalid when inputs are empty", () => {
        component.loginForm.controls.username.setValue('');
        component.loginForm.controls.password.setValue('');
        expect(component.loginForm.valid).toBeFalsy();
    });

    it("form should be valid with username and pw of length > 3", () => {
        component.loginForm.controls.username.setValue('abcdef')
        component.loginForm.controls.password.setValue('abcdef');
        expect(component.loginForm.valid).toBeTruthy();
    });
});
