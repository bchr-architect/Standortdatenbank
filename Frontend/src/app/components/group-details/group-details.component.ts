import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GroupService} from "../../services/group.service";
import {Group} from "../../modules/group";

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})

export class GroupDetailsComponent {

  group: Group;
  isReadOnly: boolean;
  changeActive: boolean


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    public dialogRef: MatDialogRef<GroupDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string, additive: string, mother: Group,
      createdDate: number, active: boolean, lastModifiedDate:number;}) {
    this.group = new Group();
    this.isReadOnly = true;
    this.changeActive = false;

  }

  onSubmit() {
    this.group = this.data;
    this.changeActive = false;
    this.groupService.save(this.group).subscribe(()=>this.dialogRef.close());
  }

  onDelete() {
    this.group = this.data;
    this.group.active = false;
    this.groupService.save(this.group).subscribe();
    this.dialogRef.close();
  }

  onEdit() {
    this.isReadOnly = false;
    this.changeActive = true;

  }

  goToGroupList() {
    this.router.navigate(['groups']);
  }
}
