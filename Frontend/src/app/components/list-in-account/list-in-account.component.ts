import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {isUndefined} from "util";
import {Group} from "../../modules/group";
import {Account} from "../../modules/account";
import {ContactService} from "../../services/contact.service";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Contact} from "../../modules/contact";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-list-in-account',
  templateUrl: './list-in-account.component.html',
  styleUrls: ['./list-in-account.component.scss']
})
export class ListInAccountComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  tableSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email','function', 'createdDate', 'notes'];
  private contacts: Contact[];
  private contact: Contact;


  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private router: Router,
              private contactService: ContactService,
              public dialog: MatDialog,
              private changeDetector: ChangeDetectorRef) {
    this.tableSource = new MatTableDataSource<Contact>(this.contacts)
  }

  ngOnInit() {
    this.router.navigate(['accounts/viewaccounts']);
    this.contactService.findAllByAccount(this.accountService.getActualAccount()).subscribe(data => {
      this.contacts=data;
      this.tableSource.data = data;
      this.tableSource.data.forEach(contact => {
        this.checkNullValues(contact);
      });
      this.tableSource.sort = this.sort;
      this.tableSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.tableSource.filter = filterValue.trim().toLowerCase();

    if (this.tableSource.paginator) {
      this.tableSource.paginator.firstPage();
    }
  }
  openContactDetailsDialog(data: Data){
    const dialogRef = this.dialog.open(ContactDetailsComponent, {
      height: '1800px',
      width: '1200px',
      data: { ...data}
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');

      if(!isUndefined(result)) {
        this.tableSource.filteredData.filter((value, index) => {
          if(value.id==result.id) {
            value=result;
          }
        });
      }

      this.contactService.findAllByAccount(this.accountService.getActualAccount()).subscribe(data => {
        this.updateTable(data);
        this.tableSource.sort = this.sort;
        this.tableSource.paginator = this.paginator;
      });
    });
  }

  checkNullValues(entry: any) {
    console.log(this.contacts)

    if (!entry.createdDate) {
      entry.createdDate = Date.UTC(2019, 11, 20, 13, 45, 0);
    }
  }

  updateTable(data: any) {
    this.tableSource.data = data;
    this.tableSource.data.forEach(entry => {
      this.checkNullValues(entry);

    });

    this.tableSource.sort = this.sort;
    this.tableSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
  }

  private getFunction(contact: Contact) {
    if (contact.account1.compName==this.accountService.getActualAccount()) {
      return contact.function1;
    }
    if (contact.account2.compName==this.accountService.getActualAccount()) {
      return contact.function2;
    }
    if (contact.account1.compName==this.accountService.getActualAccount()) {
      return contact.function3;
    }
    else return "";
  }
}
