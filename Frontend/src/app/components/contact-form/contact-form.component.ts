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
import {Group} from "../../modules/group";
import {GroupService} from "../../services/group.service";
import {HttpClient} from "@angular/common/http";

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
  groups: Group[];
  filteredAccounts: Observable<Account[]>;

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private contactService: ContactService,
    private accountService: AccountService,
    private groupService: GroupService,
    public dialogRef: MatDialogRef<ContactFormComponent>) {
    this.accounts=new Array<Account>();
    this.groups=new Array<Group>();
  }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group(
      {
        'firstName': [this.contact.firstName],
        'lastName': [this.contact.lastName],
        'email': [this.contact.email, [Validators.email]],
        'account1': [this.contact.account1],
        'account2': [this.contact.account2],
        'account3': [this.contact.account3],
        'group':[this.contact.group],
        'street': [this.contact.street],
        'notes': [this.contact.notes],
        'postCode':[this.contact.postCode],
        'country':[this.contact.country],
        'phone':[this.contact.phone],
        'fax':[this.contact.fax],
        'mailbox':[this.contact.mailbox],
        'mailboxPlace':[this.contact.mailboxPlace],
        'mailboxPostcode':[this.contact.mailboxPostcode],
        'mailboxCountry':[this.contact.mailboxCountry],
        'homepage':[this.contact.homepage],
        'active': [this.contact.active],
        'imagePath': [this.contact.imagePath]
      }
    )

    this.accountService.findAll().subscribe(sourceAccounts =>
      sourceAccounts.forEach(entry=> {
        if(entry.active) {
          this.accounts.push(entry)
        }
      })
    )

    this.groupService.findAll().subscribe(sourceGroups =>
      sourceGroups.forEach(entry=> {
        if(entry.active) {
          this.groups.push(entry)
        }
      })
    )

    this.filteredAccounts = this.accountControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.compName),
      map(name => name ? this._filter(name) : this.accounts .slice())
    )

  }

  onSubmit() {
    this.contact.active = true;
    this.onSubmitPhoto()

  }

  private _filter(name: string): Account[] {
    const filterValue = name.toLowerCase();

    return this.accounts.filter(option => option.compName.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(account?: Account): string | undefined {
    return account ? account.compName : undefined;
  }

  compareById(i1: Account, i2: Account): boolean {
    return i1 && i2 ? i1.id == i2.id : i1 == i2;
  }

  compareByGroupId(i1: Group, i2: Group): boolean {
    return i1 && i2 ? i1.id == i2.id : i1 == i2;
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  onSubmitPhoto() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    if(!this.previewUrl){
      this.contactService.save(this.contact).subscribe(()=>this.dialogRef.close());
    }
    else {
      this.http.post('http://localhost:8081/upload', formData, {responseType: "text"})
        .subscribe(res => {
          console.log(res);
          this.contact.imagePath = res.substring(43);
          this.contactService.save(this.contact).subscribe(() => this.dialogRef.close());
        })
    }
  }

}
