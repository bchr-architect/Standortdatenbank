import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {AccountService} from "../../services/account.service";
import {Account} from "../../modules/account";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})

export class AccountDetailsComponent {

  account: Account;
  isReadOnly: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<AccountDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, compName: string, email: string,
      createdDate: number, active: boolean, lastModifiedDate:number;}) {
    this.account = new Account();
    this.isReadOnly = true;
  }

  onSubmit() {
    this.account = this.data;
    this.accountService.save(this.account).subscribe();
  }

  onDelete() {
    this.account = this.data;
    this.account.active = false;
    console.log('deleting', this.account.active, this.account.id);
    this.accountService.save(this.account).subscribe();
    this.dialogRef.close();
  }

  onEdit() {
    this.isReadOnly = false;
  }

  goToAccountList() {
    this.router.navigate(['accounts']);
  }
}
