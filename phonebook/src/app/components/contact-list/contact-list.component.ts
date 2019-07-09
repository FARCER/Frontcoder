import {Component} from '@angular/core';
import {Contact} from "../../models/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  public contacts: Contact[] = [
    new Contact('Иванов Иван', '123456789'),
    new Contact('Александров Александр', '987654321'),
  ];

  public addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
}
