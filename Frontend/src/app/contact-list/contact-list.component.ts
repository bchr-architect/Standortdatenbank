import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  displayedColumns: string[] = ['Vorname', 'Nachname', 'Email'];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.findAll().subscribe(data => {
      this.contacts=data;
    });
  }

}
