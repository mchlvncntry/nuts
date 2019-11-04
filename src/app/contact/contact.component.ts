import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUsForm: FormGroup;
  submitted = false;
  ok = false; // determines whether form values are valid

  constructor(private myformBuilder: FormBuilder) {
    this.contactUsForm = this.myformBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Will be triggered when the user clicks on the Send Message button
  onSubmit() {
    this.submitted = true;

    if (this.contactUsForm.invalid) {
      return;  /* no code will be executed after this point */
    }
    this.ok = true; // all form values are valid
  }

  ngOnInit() {
  }

}
