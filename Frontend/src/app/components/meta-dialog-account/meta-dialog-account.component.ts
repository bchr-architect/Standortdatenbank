import {ChangeDetectorRef, Component, Inject, OnInit, Optional} from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive, Routes} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Account} from "../../modules/account";
import {Group} from "../../modules/group";
import {AccountDetailsComponent} from "../account-details/account-details.component";
import {Contact} from "../../modules/contact";
import {AccountService} from "../../services/account.service";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-meta-dialog-account',
  templateUrl: './meta-dialog-account.component.html',
  styleUrls: ['./meta-dialog-account.component.scss']
})
export class MetaDialogAccountComponent implements OnInit {

  account: Account;
  isReadOnly: boolean;
  changeActive: boolean;
  groups: Group[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private groupService: GroupService,
    private changeDetector: ChangeDetectorRef,
    public dialogRef: MatDialogRef<AccountDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number, compName: string, email: string, branche: Group,
      createdDate: number, lastModifiedDate: number, active: boolean, phone: string, phone2: string,
      street: string, place: string, postCode: string, country: string, ustID: string, companyType: string,
      mailbox: string, mailboxPlace: string,
      mailboxPostcode: string, mailboxCountry: string,
      homepage: string, nrOfEmployees: number, contacts: Array<Contact>;},
    @Optional() @Inject(MAT_DIALOG_DATA) public optionalData: {
      id: number, compName: string, email: string, branche: Group,
      createdDate: number, lastModifiedDate: number, active: boolean, phone: string, phone2: string,
      street: string, place: string, postCode: string, country: string, ustID: string, companyType: string,
      mailbox: string, mailboxPlace: string,
      mailboxPostcode: string, mailboxCountry: string,
      homepage: string, nrOfEmployees: number, contacts: Array<Contact>;
    })
    {
      this.account = new Account();
      this.isReadOnly = true;
      this.changeActive = false;
      this.groups=new Array<Group>();
    }

  ngOnInit() {
    this.groupService.findAll().subscribe(sourceGroups =>
      sourceGroups.forEach(entry => {
        if (entry.active) {
          this.groups.push(entry)
        }
      })
    )

    this.router.navigate(['accounts/editaccount']);
  }

  ngOnDestroy() {
    console.warn('---- Dialog was destroyed ----');
    this.router.navigate(['accounts']);
    window.location.href = 'http://localhost:4200/accounts';
  }

  reload() {
    window.location.reload();
  }

}
