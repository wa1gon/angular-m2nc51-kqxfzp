import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, 
          MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'snack-bar-component-example',
  templateUrl: 'app-main.html',
})
export class SnackBarComponentExample {
  configSuccess: MatSnackBarConfig = {
    panelClass: 'style-success',
    duration: 10000,
    horizontalPosition: 'left',
    verticalPosition: 'bottom'
  };

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      data: 'Sample data',
      ...this.configSuccess
    });
  }
}


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-custom.component.html',
})
export class PizzaPartyComponent {
  constructor( 
    public snackBarRef: MatSnackBarRef<PizzaPartyComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */