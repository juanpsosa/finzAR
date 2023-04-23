import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-siniestros-viales-sf',
  templateUrl: './siniestros-viales-sf.component.html',
  styleUrls: ['./siniestros-viales-sf.component.css']
})
export class SiniestrosVialesSfComponent implements OnInit {

  imagenGrande= false;

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
