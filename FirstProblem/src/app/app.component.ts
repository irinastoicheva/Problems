import {Component, ViewChild} from "@angular/core";
import {Validators} from "@angular/forms";
import {FieldConfig} from "./field.interface";
import {DynamicFormComponent} from "./components/dynamic-form/dynamic-form.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(DynamicFormComponent, {read: false, static: true}) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      required: true,
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      required: true,
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      required: false,
      validations: [
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      options: [
        {key: "bg", label: "Bulgaria"},
        {key: "usa", label: "USA"}
      ],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Country Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      value: "Male",
      options: [
        {key: "m", label: "Male"},
        {key: "f", label: "Female"}
      ],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Gender Required"
        }
      ]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      "options": [
        {key: "f", label: "Fishing"},
        {key: "c", label: "Cooking"},
        {key: "o", label: "Other"},
        {key: "not", label: "I do not have a hobby"},
      ],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Hobby Required"
        }
      ],
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  submit(value: any) {
    console.log(this.form.value);
  }
}
