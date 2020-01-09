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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    public dialogRef: MatDialogRef<GroupDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string, additive: string, mother: Group,
      createdDate: number, active: boolean, lastModifiedDate:number;}) {
    this.group = new Group();
    this.isReadOnly = true;
  }

  onSubmit() {
    this.group = this.data;
    this.groupService.save(this.group).subscribe(()=>this.dialogRef.close());
  }

  onDelete() {
    this.group = this.data;
    this.group.active = false;
    console.log('deleting', this.group.active, this.group.id);
    this.groupService.save(this.group).subscribe();
    this.dialogRef.close();
  }

  onEdit() {
    this.isReadOnly = false;
  }

  goToGroupList() {
    this.router.navigate(['groups']);
  }
}
