import {ChangeDetectorRef, Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ActivatedRoute, Router, RouterLinkActive, Routes} from "@angular/router";

@Component({
  selector: 'app-meta-dialog-contact',
  templateUrl: './meta-dialog-group.component.html',
  styleUrls: ['./meta-dialog-group.component.scss']
})
export class MetaDialogGroupComponent implements OnInit {

  selectedIndex;
  navLinks = ['editgroup', 'viewgroups']; //Navigation ändern
  isViewInitialized = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    // public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {

  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
    console.log('this is selected index: ', val);
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  ngOnDestroy() {
    console.warn('---- Dialog was destroyed ----');
    this.router.navigate(['groups']);
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }

}
