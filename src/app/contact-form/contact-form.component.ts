import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

  submitForm() {
    this.contactService.sendMessage(this.contact).subscribe(
      response => {
        alert("Message sent successfully!");
        this.contact = { name: '', email: '', subject: '', message: '' }; // Reset form
      },
      error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      }
    );
  }
}
