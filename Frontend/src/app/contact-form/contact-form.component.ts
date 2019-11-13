import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  contact: Contact;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService) {
  this.contact= new Contact();
  }

  onSubmit() {
    this.contactService.save(this.contact).subscribe((result => this.gotoUserList))
  }

  gotoUserList() {
    this.router.navigate(['']);
  }



}
