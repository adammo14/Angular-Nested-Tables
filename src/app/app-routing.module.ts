import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CurrentStatusComponent } from "./pages/current-status/current-status.component";
import { LoginComponent } from "./pages/login/login.component";
import { NestedDataComponent } from "./pages/nested-data/nested-data.component";

// Route Guard
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "current-status" },
  { path: "login", component: LoginComponent },
  { path: "current-status", canActivate:[AuthGuard], component: CurrentStatusComponent },
  { path: "nested-data", canActivate:[AuthGuard], component: NestedDataComponent },
  { path: "**", redirectTo: "current-status" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
