import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {GroupService} from "../../services/group.service";
import {Group} from "../../modules/group";
import {GroupFormComponent} from "../group-form/group-form.component";
import {MatDialog} from "@angular/material/dialog";
import * as XLSX from "xlsx";
import {GroupDetailsComponent} from "../group-details/group-details.component";
import {isUndefined} from "util";
import {MetaDialogGroupComponent} from "../meta-dialog-group/meta-dialog-group.component";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  groupTableSource: MatTableDataSource<Group>;
  displayedColumns: string[] = ['name', 'additive', 'createdDate'];
  private groups: Group[];
  private group: Group;
  selectedRowIndex: number = -1;

  constructor(private groupService: GroupService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    this.groupTableSource = new MatTableDataSource<Group>(this.groups)
  }

  ngOnInit() {
    this.groupService.findAll().subscribe(data => {
      this.groupTableSource.data = data;
      this.groupTableSource.data.forEach(group => this.checkNullValues(group))
      this.groupTableSource.sort = this.sort;
      this.groupTableSource.paginator = this.paginator;

    })
  }

  applyFilter(filterValue: string) {
    this.groupTableSource.filter = filterValue.trim().toLowerCase();

    if (this.groupTableSource.paginator) {
      this.groupTableSource.paginator.firstPage();
    }
  }

  checkNullValues(entry: any) {

    if (!entry.mother) {
      entry.mother = new Group();
      entry.mother.name = "";
      entry.mother.additive = "";
    }

    if (!entry.createdDate) {
      entry.createdDate = Date.UTC(2019, 11, 20, 13, 45, 0);
    }
  }

  openGroupDetailsDialog(data: Data) {
    const dialogRef = this.dialog.open(MetaDialogGroupComponent, {
      height: '1800px',
      width: '1200px',
      data: { ...data}
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');

      if(!isUndefined()) {
        this.groupTableSource.filteredData.filter((value, index) => {
          if(value.id == result.id){
            value=result;
          }

        });
      }

      this.groupService.findAll().subscribe(data => {

        this.groupTableSource.sort = this.sort;
        this.groupTableSource.paginator = this.paginator;
      });
    });
  }

  openAddGroupDialog() {
    const dialogRef = this.dialog.open(GroupFormComponent, {
      height: '1800px',
      width: '1200px',
      data: {group: this.group}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.group = result;
      this.groupService.findAll().subscribe(data => {
        this.groupTableSource.data = data;
        this.groupTableSource.data.forEach(entry => {

          this.checkNullValues(entry);

        })
        this.groupTableSource.sort = this.sort;
        this.groupTableSource.paginator = this.paginator;
      });
    });
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.groupTableSource.filteredData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Gruppen');

    XLSX.writeFile(wb, 'Gruppen.xlsx');

  }
}
