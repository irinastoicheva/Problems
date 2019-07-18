import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";

@Component({
  selector: "app-checkbox",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <p>{{field.label}}:</p>
      <mat-checkbox [formControlName]="field.name" *ngFor="let opt of field.options" [value]="opt.label"
                    ngProjectAs="mat-error">{{opt.label}}</mat-checkbox>
      <mat-error *ngIf="group.get(field.name).invalid">Hobby Required</mat-error>
    </div>
  `,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
