import {Component} from '@angular/core';
import {Contact} from "../../models/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  public contacts: Contact[] = [
    {
      name: 'Иванов Иван',
      phone: '123456789'
    }, {
      name: 'Александров Александр',
      phone: '987654321'
    }
  ];
}
