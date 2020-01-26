import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
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

@Component({
  selector: 'app-list-in-account',
  templateUrl: './list-in-account.component.html',
  styleUrls: ['./list-in-account.component.scss']
})
export class ListInAccountComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  tableSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'account', 'group', 'createdDate', 'notes'];
  private contacts: Contact[];
  private contact: Contact;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactService: ContactService,
              public dialog: MatDialog,
              private changeDetector: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data1: {
                id: number, compName: string, email: string, branche: Group,
                createdDate: number, lastModifiedDate: number, active: boolean, phone: string, phone2: string,
                street: string, place: string, postCode: string, country: string, ustID: string, companyType: string,
                mailbox: string, mailboxPlace: string,
                mailboxPostcode: string, mailboxCountry: string,
                homepage: string, nrOfEmployees: number, contacts: Array<Contact>;
              }
  ) {
              this.tableSource = new MatTableDataSource<Contact>(this.contacts)
  }

  ngOnInit() {
    this.router.navigate(['accounts/viewaccounts']);

    this.contactService.findAllByAccount("JKU").subscribe(data => {
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

      this.contactService.findAllByAccount("JKU").subscribe(data => {
        this.updateTable(data);
        this.tableSource.sort = this.sort;
        this.tableSource.paginator = this.paginator;
      });
    });
  }

  checkNullValues(entry: any) {
    if (!entry.group) {
      entry.group = new Group();
      entry.group.name = "";
      entry.group.additive = "";
    }
    if (!entry.account1) {
      entry.account1 = new Account();
      entry.account1.id = "";
      entry.account1.compName = "";
      entry.account1.email = "";
      entry.account1.active = "";
      entry.account1.createdDate="";
      entry.account1.lastModifiedDate="";
    }

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

  ngAfterClose() {
    console.warn('---- Dialog was destroyed in ListInAccount ----');
    this.router.navigate(['accounts']);
  }

}
