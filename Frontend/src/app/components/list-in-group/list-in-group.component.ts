import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-in-group',
  templateUrl: './list-in-group.component.html',
  styleUrls: ['./list-in-group.component.scss']
})
export class ListInGroupComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.router.navigate(['groups/viewgroups']);
  }

  ngAfterClose() {
    console.warn('---- Dialog was destroyed in ListInGroup ----');
    this.router.navigate(['groups']);
  }

}
