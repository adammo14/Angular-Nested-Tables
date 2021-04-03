import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrentStatusComponent } from "./current-status.component";
import { AppModule } from '../../app.module';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("CurrentStatusComponent", () => {
    let component: CurrentStatusComponent;
    let fixture: ComponentFixture <CurrentStatusComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [AppModule],
                declarations: [CurrentStatusComponent],
            }).compileComponents().then(() => {
                fixture = TestBed.createComponent(CurrentStatusComponent);

                component = fixture.componentInstance;

                de = fixture.debugElement.query(By.css('.panel'));

                el = de.nativeElement;
            });
        })
    );

    it("should create current-status component", () => {
        expect(component).toBeTruthy();
    });
});
