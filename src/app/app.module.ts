import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

// modules
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { CurrentStatusComponent } from "./pages/current-status/current-status.component";
import { LoginComponent } from "./pages/login/login.component";
import { NestedDataComponent } from "./pages/nested-data/nested-data.component";
import { DangerAlert } from "./components/Alerts/Danger/danger-alert.component";

// services / providers
import { FakeDatabaseService } from "../client/fake-database.service";
import { MockApiService } from "src/client/mock-api.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CurrentStatusComponent,
    NestedDataComponent,
    DangerAlert
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(FakeDatabaseService)
  ],
  providers: [MockApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
