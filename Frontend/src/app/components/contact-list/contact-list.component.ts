import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {Contact} from "../../modules/contact";
import {MatDialog} from "@angular/material/dialog";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {Account} from "../../modules/account";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {isUndefined} from "util";
import * as XLSX from 'xlsx';
import {Group} from "../../modules/group";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tableSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'account', 'group', 'createdDate', 'notes'];
  private contacts: Contact[];
  private contact: Contact;

  selectedRowIndex: number = -1;

  constructor(private contactService: ContactService,
              private accountService: AccountService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    this.tableSource = new MatTableDataSource<Contact>(this.contacts)
  }

  ngOnInit() {
    this.contactService.findAll().subscribe(data => {
      this.updateTable(data);

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
      height: '600px',
      width: '850px',
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

      this.contactService.findAll().subscribe(data => {

        this.tableSource.sort = this.sort;
        this.tableSource.paginator = this.paginator;
      });
    });
  }

  openAddContactDialog() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '850px',
      height: '600px',
      data: {contact: this.contact}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', this.tableSource.data);
      if(!isUndefined(result)) {
        this.tableSource.filteredData.filter((value, index) => {
          if(value.id==result.id) {
            value=result;
          }

        });
      }
      this.contact = result;
      this.contactService.findAll().subscribe(data => {
        this.tableSource.data = data;
        this.tableSource.data.forEach(entry => {

          this.checkNullValues(entry);
          this.checkInactive(entry);

        });
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
    if (!entry.account) {
      entry.account = new Account();
      entry.account.id = "";
      entry.account.compName = "";
      entry.account.email = "";
      entry.account.active = "";
      entry.account.createdDate="";
      entry.account.lastModifiedDate="";
    }

    if (!entry.createdDate) {
      entry.createdDate = Date.UTC(2019, 11, 20, 13, 45, 0);
    }
  }

  updateTable(data: any) {

    this.tableSource.data = data;
    this.tableSource.data.forEach(entry => {
      this.checkNullValues(entry);
      this.checkInactive(entry);
    })
    this.tableSource.sort = this.sort;
    this.tableSource.paginator = this.paginator;
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tableSource.filteredData);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Kontakte');

    XLSX.writeFile(wb, 'Kontakte.xlsx');
  }

  checkInactive(entry: any) {
    if (entry.inactive) {
      const index = this.tableSource.data.indexOf(entry);
      //this.tableSource.data.splice(index,1);
    }
  }
}
