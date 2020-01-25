import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ContactService} from "./services/contact.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import { AccountListComponent } from './components/account-list/account-list.component';
import {AccountFormComponent} from "./components/account-form/account-form.component";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import { MatCardModule, MatIconModule } from '@angular/material';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRippleModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {GroupListComponent} from "./components/group-list/group-list.component";
import {GroupFormComponent} from "./components/group-form/group-form.component";
import {GroupDetailsComponent} from "./components/group-details/group-details.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import { MetaDialogGroupComponent } from './components/meta-dialog-group/meta-dialog-group.component';
import { MetaDialogAccountComponent } from './components/meta-dialog-account/meta-dialog-account.component';
import { ListInAccountComponent } from './components/list-in-account/list-in-account.component';
import { ListInGroupComponent } from './components/list-in-group/list-in-group.component';

@NgModule({
  declarations: [
  AppComponent,
  ContactListComponent,
  ContactFormComponent,
  AccountListComponent,
  AccountFormComponent,
  GroupListComponent,
  GroupFormComponent,
  AccountDetailsComponent,
  ContactDetailsComponent,
  GroupDetailsComponent,
  MetaDialogGroupComponent,
  MetaDialogAccountComponent,
  ListInAccountComponent,
  ListInGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatRippleModule,
    FlexModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatTabsModule
  ],
  entryComponents: [AccountDetailsComponent, ContactDetailsComponent, GroupDetailsComponent,
  MetaDialogGroupComponent, MetaDialogAccountComponent,
    ListInAccountComponent, ListInGroupComponent],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
