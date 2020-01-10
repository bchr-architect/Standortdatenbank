import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from "../../modules/contact";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import {Account} from "../../modules/account";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  contact: Contact;
  isReadOnly: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    public dialogRef: MatDialogRef<ContactDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number, lastName: string, firstName: string, email: string, email2: string,
      createdDate: number, lastModifiedDate: number, corporation: string, place: string,
      street: string, postCode: string, country: string, phone: string, phone2: string,
      phone3: string, phone4: string, fax: string, mailbox: string, mailboxPlace: string,
      mailboxPostcode: string, mailboxCountry: string, homepage: string, account: Account,
      creatorID: string, editedByID: string, grpID: number, representativeID: string,
      languageID: string, ustID: string, contactID: number, shippingAddress: string,
      refAddress: string, refAddress2: string, additional: string, additional2: string,
      additional3: string, inactive: boolean, privatePerson: boolean, cession: boolean,
      cessionNote: string, appellation: string, letterAppellation: string, title: string,
      postpositiveTitle: string, memo: number, department: string, function: string,
      priority: number, freeFlag1: boolean, freeFlag2: boolean, displayName: string,
      tradeFlag: boolean, productionFlag: boolean, serviceFlag: boolean, foundingDate: number,
      status: number, contactType: number, dsvFlag: boolean, dsvSourceOfData: string,
      dsvNotification: boolean, dsvDirectAdFlag: boolean, dsvAnonymisedBy: string,
      dsvDataCollection: number, dsvAnonymised: boolean, region: string, targetAudience: string,
      notes: string; birthday: number;
    }) {
    this.contact = new Contact();
    this.isReadOnly = true;
    }

    onSubmit() {
      this.contact = this.data;
      this.contactService.save(this.contact).subscribe();
    }

    onDelete() {
      this.contact = this.data;
      this.contact.inactive = true;
      this.contactService.save(this.contact).subscribe();
      this.dialogRef.close();
    }

    onEdit() {
      this.isReadOnly = false;
    }

    goToContactList() {
      this.router.navigate(['contacts']);
    }

}
