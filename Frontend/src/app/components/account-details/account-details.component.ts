import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router'
import {AccountService} from "../../services/account.service";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Account} from "../../modules/account";
import {Contact} from "../../modules/contact";
import {Group} from "../../modules/group";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})

export class AccountDetailsComponent implements OnInit{

  account: Account;
  isReadOnly: boolean;
  changeActive: boolean;
  groups: Group[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private groupService: GroupService,
    public dialogRef: MatDialogRef<AccountDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number, compName: string, email: string, branche: Group,
      createdDate: number, lastModifiedDate: number, active: boolean, phone: string, phone2: string,
      street: string, place: string, postCode: string, country: string, ustID: string, companyType: string,
      mailbox: string, mailboxPlace: string,
      mailboxPostcode: string, mailboxCountry: string,
      homepage: string, nrOfEmployees: number, contacts: Array<Contact>;
    }) {
    this.account = new Account();
    this.isReadOnly = true;
    this.changeActive = false;
    this.groups=new Array<Group>();
  }

  ngOnInit(): void {
    this.groupService.findAll().subscribe(sourceGroups =>
      sourceGroups.forEach(entry => {
        if (entry.active) {
          this.groups.push(entry)
        }
      })
    )
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

  compareByGroupId(i1: Group, i2: Group): boolean {
    return i1 && i2 ? i1.id == i2.id : i1 == i2;
  }

}
