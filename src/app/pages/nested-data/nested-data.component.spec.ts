import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { NestedDataComponent } from "./nested-data.component";
import { AppModule } from '../../app.module';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("NestedDataComponent", () => {
    let component: NestedDataComponent;
    let fixture: ComponentFixture <NestedDataComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [AppModule],
                declarations: [NestedDataComponent],
            }).compileComponents().then(() => {
                fixture = TestBed.createComponent(NestedDataComponent);

                component = fixture.componentInstance;

                de = fixture.debugElement.query(By.css('.panel'));

                el = de.nativeElement;
            });;
        })
    );

    it("should create nested-data component", () => {
        expect(component).toBeTruthy();
    });
});
