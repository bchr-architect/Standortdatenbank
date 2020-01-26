import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Contact} from "../../modules/contact";

@Component({
  selector: 'app-list-in-account',
  templateUrl: './list-in-account.component.html',
  styleUrls: ['./list-in-account.component.scss']
})
export class ListInAccountComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private changeDetector: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data: {
                id: number, compName: string, contacts: Array<Contact>;})
              { }

  ngOnInit() {
    this.router.navigate(['accounts/viewaccounts']);
  }

  ngAfterClose() {
    console.warn('---- Dialog was destroyed in ListInAccount ----');
    this.router.navigate(['accounts']);
  }

}
