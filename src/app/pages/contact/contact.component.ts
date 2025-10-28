import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  email = "awael534@gmail.com";
  phone1 = "+201090079185";
  phone2 = "+201551739992";
  linkedin = "https://www.linkedin.com/in/ahmedwaelmohamed";

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.isSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log("Form Submitted!", this.contactForm.value);

    alert("Message sent successfully! (Check the console for data)");

    this.contactForm.reset();
    this.isSubmitted = false;
  }
}

