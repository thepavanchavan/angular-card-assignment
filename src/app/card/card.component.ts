import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() dataSet:any= []

constructor() {}
key:any="hide"
expand:any="readMore"
  ngOnInit(): void {}
  readMore() {
    this.key = "show";
    this.expand = "readMoreHide"
   }
   readLess() {
    this.key = "hide"
    this.expand = "readMore"
   }
}
