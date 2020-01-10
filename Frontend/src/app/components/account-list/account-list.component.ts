import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AccountService} from "../../services/account.service";
import {Account} from "../../modules/account";
import {AccountFormComponent} from "../account-form/account-form.component";
import {MatDialog} from "@angular/material/dialog";
import {AccountDetailsComponent} from "../account-details/account-details.component";
import {isUndefined} from "util";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})

export class AccountListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  accountTableSource: MatTableDataSource<Account>;
  displayedColumns: string[] = ['ID','compName', 'email', 'createdDate','lastModifiedDate'];
  private accounts: Account[];
  private account: Account;
  selectedRowIndex: number = -1;

  constructor(private accountService: AccountService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
              this.accountTableSource = new MatTableDataSource<Account>(this.accounts);
  }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accountTableSource.data = data;
      this.accountTableSource.data.forEach(account => {
        this.checkNullValues(account)
        this.checkInactive(account);
      });
      this.accountTableSource.sort = this.sort;
      this.accountTableSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.accountTableSource.filter = filterValue.trim().toLowerCase();

    if (this.accountTableSource.paginator) {
      this.accountTableSource.paginator.firstPage();
    }
  }

  checkNullValues(entry: any) {
    if (!entry.createdDate) {
      entry.createdDate = Date.UTC(2019, 11, 20, 13, 45, 0);
    }

    if(entry.active == null){
      entry.active=false;
    }
  }

  openAccountDetailsDialog(data: Data) {
    const dialogRef = this.dialog.open(AccountDetailsComponent, {
      height: '500px',
      width: '550px',
      data: { ...data}
    });
    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');

      if(!isUndefined(result)){
        this.accountTableSource.filteredData.filter((value, index) => {
          if(value.id == result.id){
            value=result;
          }

        });
      }

      this.accountService.findAll().subscribe(data => {
        this.accountTableSource.sort = this.sort;
        this.accountTableSource.paginator = this.paginator;
      });
    });
  }

  openAddAccountDialog() {
    const dialogRef = this.dialog.open(AccountFormComponent, {
      width: '700px',
      height: '300px',
      data: {account: this.account}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.account = result;
      this.accountService.findAll().subscribe(data => {
        this.accountTableSource.data = data;
        this.accountTableSource.data.forEach(entry => {

          this.checkNullValues(entry);
          this.checkInactive(entry);

        })
        this.accountTableSource.sort = this.sort;
        this.accountTableSource.paginator = this.paginator;
      });
    });
  }

  checkInactive(entry: any) {
    if(!entry.active) {
      const index = this.accountTableSource.data.indexOf(entry);
      this.accountTableSource.data.splice(index,1);
    }
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.accountTableSource.filteredData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Unternehmen');

    XLSX.writeFile(wb, 'Unternehmen.xlsx');

  }
}
