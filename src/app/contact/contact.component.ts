import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  activeIndex: number | null = null;
  currentYear = new Date().getFullYear();

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}


