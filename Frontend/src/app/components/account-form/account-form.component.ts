import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {AccountService} from "../../services/account.service";
import {Account} from "../../modules/account";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent  {

  account: Account
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<AccountFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {active: boolean}) {
    this.account= new Account();
    }

  onSubmit() {
    this.account.active = true;
    this.accountService.save(this.account).subscribe();
    this.dialogRef.close();
  }

  goToAccountList() {
    this.router.navigate(['accounts']);
  }



}
