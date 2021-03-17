import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() dataSet:any= [];
  // pills:any=[];
  // pills = this.dataSet.pills

public pillsCount=0;

constructor() {
//  for (let i = 2; i < this.dataSet.pills.length(); i++) {
//    this.pillsCount = this.pillsCount+1;
//  }
//  console.log(this.pillsCount);
 }
  ngOnInit(){
    console.log(this.dataSet)
  };
}
