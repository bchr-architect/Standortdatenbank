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

@NgModule({
  declarations: [
  AppComponent,
  ContactListComponent,
  ContactFormComponent,
  AccountListComponent,
  AccountFormComponent
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
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
