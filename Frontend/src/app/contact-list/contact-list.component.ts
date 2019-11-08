import {Component, OnInit, ViewChild} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tableSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  private contacts: Contact[];
  constructor(private contactService: ContactService) {
    this.tableSource= new MatTableDataSource<Contact>(this.contacts)

  }

  ngOnInit() {
    this.contactService.findAll().subscribe(data => {
      this.tableSource.data=data;
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

}
