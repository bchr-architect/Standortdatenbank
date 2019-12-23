import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from "../../modules/contact";
import {Account} from "../../modules/account";
import {ActivatedRoute, Router} from '@angular/router'
import {ContactService} from "../../services/contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AccountService} from "../../services/account.service";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{

  accountControl =new FormControl();
  contact: Contact = new Contact();
  contactForm: FormGroup;
  accounts: Account[];
  filteredAccounts: Observable<Account[]>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<ContactFormComponent>) {
    this.accounts=new Array<Account>();
  }


  ngOnInit(): void {
    this.contactForm=this.formBuilder.group(
      {
        'firstName': [this.contact.firstName],
        'lastName': [this.contact.lastName],
        'email': [this.contact.email, [Validators.email]],
        'account': [this.contact.account],
        'notes': [this.contact.notes]
      }
    )

    this.accountService.findAll().subscribe(sourceAccounts =>
      sourceAccounts.forEach(entry=> this.accounts.push(entry) )
    )


    this.filteredAccounts = this.accountControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.compName),
      map(name => name ? this._filter(name) : this.accounts .slice())
    )
  }

  onSubmit() {

    this.contactService.save(this.contact).subscribe(()=> this.dialogRef.close());

  }

  private _filter(name: string): Account[] {
    const filterValue = name.toLowerCase();

    return this.accounts.filter(option => option.compName.toLowerCase().indexOf(filterValue) === 0);
  }
}
