import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-in-account',
  templateUrl: './list-in-account.component.html',
  styleUrls: ['./list-in-account.component.scss']
})
export class ListInAccountComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.router.navigate(['accounts/viewaccounts']);
  }

  ngAfterClose() {
    console.warn('---- Dialog was destroyed in ListInAccount ----');
    this.router.navigate(['accounts']);
  }

}
