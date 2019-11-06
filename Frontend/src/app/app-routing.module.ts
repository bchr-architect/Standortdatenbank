import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";


const routes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'addcontact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
