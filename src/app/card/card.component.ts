import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() dataSet:any= [];
  pills:any=["Color","Test","Smell","Sweet","Size","Season"]

public pillsCount=0;

constructor() {
for (let i = 2; i < this.pills.length; i++) {
  this.pillsCount = this.pillsCount+1;
}
console.log(this.pillsCount);
}
key:any="hide"
expand:any="readMore"
  ngOnInit(): void {}
  readMore(id:any) {
    console.log(id)
    this.key = "show";
    this.expand = "readMoreHide"
   }
   readLess(id:any) {
    this.key = "hide"
    this.expand = "readMore"
   }
}
