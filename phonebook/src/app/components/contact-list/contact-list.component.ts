import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/contact.model";
import {CONTACTS} from "./contacts.mockup";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [];

  ngOnInit(): void {
    this.contacts = CONTACTS;
  }

  public addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  public filter(e: KeyboardEvent) {
    const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    if (value) {
      this.contacts = this.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(value));
    } else {
      this.contacts = CONTACTS;
    }
  }
}
