import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../models/contact.model";
import {ContactsService} from '../../../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() public contact: Contact;

  constructor(
    private contactsService: ContactsService
  ) {
  }

  ngOnInit() {
  }

  public remove() {
    this.contactsService.removeContact(this.contact.id);
  }

}
