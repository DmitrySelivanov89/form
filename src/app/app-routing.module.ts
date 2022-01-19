import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckFormComponent} from "./pages/check-form/check-form.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'check-form', component: CheckFormComponent},
  {path: '', component: CheckFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
