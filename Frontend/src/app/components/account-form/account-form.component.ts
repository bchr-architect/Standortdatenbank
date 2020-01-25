import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {AccountService} from "../../services/account.service";
import {Account} from "../../modules/account";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Group} from "../../modules/group";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  account: Account;
  groups: Group[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private groupService: GroupService,
    public dialogRef: MatDialogRef<AccountFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {active: boolean}) {
    this.account= new Account();
    this.groups=new Array<Group>();
  }

  ngOnInit(): void {
    this.groupService.findAll().subscribe(sourceGroups =>
      sourceGroups.forEach(entry=> {
        if(entry.active) {
          this.groups.push(entry)
        }
      })
    )
  }

  onSubmit() {
    this.account.active = true;
    this.accountService.save(this.account).subscribe(()=>this.dialogRef.close());
  }

  goToAccountList() {
    this.router.navigate(['accounts']);
  }

  onCancel() {
    this.dialogRef.close();
  }

  compareByGroupId(i1: Group, i2: Group): boolean {
    return i1 && i2 ? i1.id == i2.id : i1 == i2;
  }
}

