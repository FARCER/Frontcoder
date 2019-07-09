import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../../models/contact.model";

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent implements OnInit {

  @Output() public addContact: EventEmitter<Contact> = new EventEmitter<Contact>();

  public isShowForm: boolean = false;
  public addContactForm: FormGroup;

  public showForm(): void {
    this.isShowForm = true;
  }

  ngOnInit(): void {
    this.addContactForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      phone: new FormControl(null, {validators: [Validators.required]}),
    })
  }

  public onSubmit(): void {
    let name = this.addContactForm.value.name;
    let phone = this.addContactForm.value.phone;
    let contact = new Contact(name, phone);
    this.addContact.emit(contact);
    this.addContactForm.reset();
    this.isShowForm = false;
  }

}
