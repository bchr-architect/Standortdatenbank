import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../../modules/contact";
import {MatDialog} from "@angular/material/dialog";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {Account} from "../../modules/account";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tableSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email','account'];
  private contacts: Contact[];
  private contact: Contact;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    this.tableSource = new MatTableDataSource<Contact>(this.contacts)


  }

  ngOnInit() {
    this.contactService.findAll().subscribe(data => {
      this.tableSource.data = data;
      this.tableSource.data.forEach(entry=> {
        if(!entry.account) {
          entry.account=new Account();
          entry.account.compName="";
          entry.account.email="";
        }
      })
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

  goToContactAdd() {
    this.router.navigate(['addcontact']);
  }

  openAddContactDialog() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '300px',
      data: {contact: this.contact}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.contact = result;
      this.contactService.findAll().subscribe(data => {
        this.tableSource.data = data;
        this.tableSource.data.forEach(entry=> {
          if(!entry.account) {
            entry.account=new Account();
            entry.account.compName="";
            entry.account.email="";
          }
        })
        this.tableSource.sort = this.sort;
        this.tableSource.paginator = this.paginator;
      });
    });
  }

}