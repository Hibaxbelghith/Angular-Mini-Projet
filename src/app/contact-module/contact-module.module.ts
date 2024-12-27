import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponenComponent } from '../contact-componen/contact-componen.component';
import { ContactComponent } from '../contact/contact.component';



@NgModule({
  declarations: [
    ContactComponenComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModuleModule { }
