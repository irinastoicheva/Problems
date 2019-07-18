import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";

@Component({
  selector: "app-radiobutton",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <p class="radio-label-padding">{{field.label}}:</p>
      <mat-radio-group [formControlName]="field.name">
        <mat-radio-button *ngFor="let item of field.options" [value]="item.label"
                          ngProjectAs="mat-error">{{item.label}}</mat-radio-button>
      </mat-radio-group>
      <mat-error *ngIf="group.get(field.name).invalid">Country Required</mat-error>
    </div>
  `,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
