import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {AccountService} from "../../services/account.service";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Account} from "../../modules/account";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})

export class AccountDetailsComponent {

  account: Account;
  isReadOnly: boolean;
  changeActive: boolean

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<AccountDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number, compName: string, email: string,
      createdDate: number, lastModifiedDate: number, active: boolean, phone: string, phone2: string, street: string, place: string, postCode: string, country: string, ustID: string, companyType: string, homepage: string, nrOfEmployees: number;
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
