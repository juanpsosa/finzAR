import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharpe-ratio',
  templateUrl: './sharpe-ratio.component.html',
  styleUrls: ['./sharpe-ratio.component.css']
})
export class SharpeRatioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
