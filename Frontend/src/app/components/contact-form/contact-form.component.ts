import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from "../../modules/contact";
import {ActivatedRoute, Router} from '@angular/router'
import {ContactService} from "../../services/contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{

  contact: Contact = new Contact();
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    public dialogRef: MatDialogRef<ContactFormComponent>) {

  }


  ngOnInit(): void {
    this.contactForm=this.formBuilder.group(
      {
        'firstName': [this.contact.firstName],
        'lastName' : [this.contact.lastName],
        'email' : [this.contact.email, [Validators.email] ]
      }
    )
  }

  onSubmit() {
    this.contactService.save(this.contact).subscribe();
    this.dialogRef.close();
  }



}
