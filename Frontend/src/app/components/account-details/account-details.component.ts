import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router'
import {AccountService} from "../../services/account.service";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Account} from "../../modules/account";
import {Contact} from "../../modules/contact";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {isUndefined} from "util";
import {Group} from "../../modules/group";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})

export class AccountDetailsComponent{

  account: Account;
  isReadOnly: boolean;
  changeActive: boolean

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<AccountDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number, compName: string, email: string, branche: Group,
      createdDate: number, lastModifiedDate: number, active: boolean, phone: string, phone2: string, street: string, place: string, postCode: string, country: string, ustID: string, companyType: string, homepage: string, nrOfEmployees: number, contacts: Array<Contact>;
    }) {
    this.account = new Account();
    this.isReadOnly = true;
    this.changeActive = false;
  }


  onSubmit() {
    this.account = this.data;
    this.changeActive = false;
    this.accountService.save(this.account).subscribe();
  }

  onDelete() {
    this.account = this.data;
    this.account.active = false;
    this.accountService.save(this.account).subscribe();
    this.dialogRef.close();
  }

  onEdit() {
    this.isReadOnly = false;
    this.changeActive = true;


  }

  goToAccountList() {
    this.router.navigate(['accounts']);
  }


}
