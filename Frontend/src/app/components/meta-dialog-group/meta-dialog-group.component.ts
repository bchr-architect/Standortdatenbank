import {ChangeDetectorRef, Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router, RouterLinkActive, Routes} from "@angular/router";
import {Group} from "../../modules/group";
import {GroupDetailsComponent} from "../group-details/group-details.component";

@Component({
  selector: 'app-meta-dialog-contact',
  templateUrl: './meta-dialog-group.component.html',
  styleUrls: ['./meta-dialog-group.component.scss']
})
export class MetaDialogGroupComponent implements OnInit {

  group: Group;
  isReadOnly: boolean;
  changeActive: boolean;
  class: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    public dialogRef: MatDialogRef<GroupDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string, additive: string, mother: Group,
      createdDate: number, active: boolean, lastModifiedDate:number;},
    @Optional() @Inject(MAT_DIALOG_DATA) public optionalData: {id: number, name: string, additive: string, mother: Group,
      createdDate: number, active: boolean, lastModifiedDate:number;})
  {
    this.group = new Group();
    this.isReadOnly = true;
    this.changeActive = false;
  }

  ngOnInit() {
    this.class = "nav-bar1";
    this.router.navigate(['groups/editgroup']);
  }

  ngOnDestroy() {
    console.warn('---- Dialog was destroyed ----');
    this.router.navigate(['groups']);
    window.location.href = 'http://localhost:4200/groups';
  }

  reload() {
    window.location.reload();
  }

  moveFunction() {
    if(window.location.href == 'http://localhost:4200/groups/viewgroups') {
      return this.class = "nav-bar2";
    } else {
      return this.class = "nav-bar1";
    }
  }
}
