import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {GroupService} from "../../services/group.service";
import {Group} from "../../modules/group";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent  {

  group: Group
  groups: Group[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    public dialogRef: MatDialogRef<GroupFormComponent>) {
    this.group= new Group();
    this.groups = new Array<Group>();

  }

  ngOnInit(): void {

    this.groupService.findAll().subscribe(sourceGroups =>
      sourceGroups.forEach(entry=> this.groups.push(entry) )
    )
  }

  onSubmit() {
    this.group.active = true;
    this.groupService.save(this.group).subscribe(()=>this.dialogRef.close());
  }

  goToGroupList() {
    this.router.navigate(['groups']);
  }



}
