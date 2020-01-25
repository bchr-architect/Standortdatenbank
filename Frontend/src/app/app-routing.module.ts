import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {ContactFormComponent} from "./components/contact-form/contact-form.component";
import {AccountListComponent} from "./components/account-list/account-list.component";
import {AccountFormComponent} from "./components/account-form/account-form.component";
import {GroupFormComponent} from "./components/group-form/group-form.component";
import {GroupListComponent} from "./components/group-list/group-list.component";
import {GroupDetailsComponent} from "./components/group-details/group-details.component";
import {AccountDetailsComponent} from "./components/account-details/account-details.component";
import {ListInGroupComponent} from "./components/list-in-group/list-in-group.component";
import {ListInAccountComponent} from "./components/list-in-account/list-in-account.component";


const routes: Routes = [
  {path: 'accounts', component: AccountListComponent},
  {path: 'addaccount', component: AccountFormComponent},
  {path: 'editaccount', component: AccountDetailsComponent},
  {path: 'viewaccounts', component: ListInAccountComponent},

  {path: 'contacts', component: ContactListComponent},
  {path: 'addcontact', component: ContactFormComponent},

  {path: 'groups', component: GroupListComponent},
  {path: 'addgroup', component: GroupFormComponent},
  {path: 'editgroup', component: GroupDetailsComponent},
  {path: 'viewgroups', component: ListInGroupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
