import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const nav = document.getElementById('nav-links');
        if (nav?.classList.contains('active')) {
          nav.classList.remove('active');
        }
      });
    });

    toggle?.addEventListener('click', () => {
      const nav = document.getElementById('nav-links');
      nav?.classList.toggle('active');
    });
  }
}
