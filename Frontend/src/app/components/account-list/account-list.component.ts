import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AccountService} from "../../services/account.service";
import {Account} from "../../modules/account";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  accountTableSource: MatTableDataSource<Account>;
  displayedColumns: string[] = ['compName', 'email', 'createdDate'];
  private accounts: Account[];
  selectedRowIndex: number = -1;

  constructor(private accountService: AccountService,
              private route: ActivatedRoute,
              private router: Router) {
    this.accountTableSource = new MatTableDataSource<Account>(this.accounts)
  }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accountTableSource.data = data;
      this.accountTableSource.data.forEach(account => this.checkNullValues(account))
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
  }

  goToAccountAdd() {
    this.router.navigate(['addaccount']);
  }


}
