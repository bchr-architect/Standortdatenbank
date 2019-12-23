import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../../modules/contact";
import {MatDialog} from "@angular/material/dialog";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {Account} from "../../modules/account";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('contactTable', {static:false}) table: ElementRef;
  tableSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'account', 'createdDate', 'notes'];
  private contacts: Contact[];
  private contact: Contact;
  selectedRowIndex: number = -1;

  constructor(private contactService: ContactService,
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

  openAddContactDialog() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '500px',
      height: '550px',
      data: {contact: this.contact}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.contact = result;
      this.contactService.findAll().subscribe(data => {
        this.updateTable(data);
      });

    });
  }

  checkNullValues(entry: any) {
    if (!entry.account) {
      entry.account = new Account();
      entry.account.compName = "";
      entry.account.email = "";
    }

    if (!entry.createdDate) {
      entry.createdDate = Date.UTC(2019, 11, 20, 13, 45, 0);
    }
  }

  updateTable(data: any) {

    this.tableSource.data = data;
    this.tableSource.data.forEach(entry => {
      this.checkNullValues(entry);
    })
    this.tableSource.sort = this.sort;
    this.tableSource.paginator = this.paginator;
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.tableSource.filteredData);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Kontakte');

    /* save to file */
    XLSX.writeFile(wb, 'Kontakte.xlsx');

  }
}


