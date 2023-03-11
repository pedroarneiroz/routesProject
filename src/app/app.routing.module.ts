import { NgModule } from "@angular/core";
import { RouterModule, Route, Routes } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}