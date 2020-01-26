import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from "../../modules/contact";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router, RouterLinkActive, Routes} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import {Account} from "../../modules/account";
import {AccountService} from "../../services/account.service";
import {GroupService} from "../../services/group.service";
import {Group} from "../../modules/group";
import {isUndefined} from "util";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  isReadOnly: boolean;
  changeActive: boolean
  accounts: Account[];
  groups: Group[];
  s: string;

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private groupService: GroupService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<ContactDetailsComponent>,
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number, lastName: string, firstName: string, email: string, email2: string,
      createdDate: number, lastModifiedDate: number, place: string,
      street: string, postCode: string, country: string, phone: string, phone2: string,
      phone3: string, phone4: string, fax: string, mailbox: string, mailboxPlace: string,
      mailboxPostcode: string, mailboxCountry: string, homepage: string, account1: Account, account2: Account, account3: Account,
      creatorID: string, editedByID: string, representativeID: string,
      languageID: string, additional: string, additional2: string,
      additional3: string, active: boolean, privatePerson: boolean, appellation: string, title: string,
      memo: number, department1: string; department2: string; department3: string; function1: string; function2: string; function3: string
      freeFlag1: boolean, freeFlag2: boolean, displayName: string,
      tradeFlag: boolean, productionFlag: boolean, serviceFlag: boolean,
      status: number, dsvFlag: boolean, dsvSourceOfData: string,
      dsvNotification: boolean, dsvDirectAdFlag: boolean, dsvAnonymisedBy: string,
      dsvDataCollection: number, dsvAnonymised: boolean, region: string, trailingTitle: string, letterSalutation: string, imagePath: string
      notes: string; group: Group;
    }) {
    this.contact = new Contact();
    this.isReadOnly = true;
    this.changeActive = false;
    this.accounts = new Array<Account>();
    this.groups = new Array<Group>();
  }

  ngOnInit() {
    this.accountService.findAll().subscribe(sourceAccounts =>
      sourceAccounts.forEach(entry => {
        if (entry.active) {
          this.accounts.push(entry)
        }
      })
    )

    this.groupService.findAll().subscribe(sourceGroups =>
      sourceGroups.forEach(entry => {
        if (entry.active) {
          this.groups.push(entry)
        }
      })
    )

  }

  onSubmit() {
    this.checkNullValues();
    this.contactService.save(this.contact).subscribe();
  }

  onDelete() {
    this.checkNullValues();
    this.contact.active = false;
    this.contactService.save(this.contact).subscribe();
    this.dialogRef.close();
  }

  onEdit() {
    this.isReadOnly = false;
    this.changeActive = true;
  }

  goToContactList() {
    this.router.navigate(['contacts']);
  }

  compareById(i1: Account, i2: Account): boolean {
    return i1 && i2 ? i1.id == i2.id : i1 == i2;
  }

  compareByGroupId(i1: Group, i2: Group): boolean {
    return i1 && i2 ? i1.id == i2.id : i1 == i2;
  }

  checkNullValues() { //saving "" not possible, saving null is
    if (this.data.account1 == null || isUndefined(this.data.account1.compName) || this.data.account1.compName == "") {
      this.data.account1 = null;
    }
    this.contact = this.data;

    if (this.data.group == null || isUndefined(this.data.group.name) || this.data.group.name == "") {
      this.data.group = null;
      this.contact = this.data;
    } else {
      this.contact = this.data;
    }
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

    this.http.post('http://localhost:8081/upload', formData, {responseType: "text"})
      .subscribe(res => {
        console.log(res);
        this.data.imagePath = res;
      })
  }


}
