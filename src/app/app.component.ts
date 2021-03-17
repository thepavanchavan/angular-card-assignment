import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'card-assignment';

  information: any = [
    {
      id: 1,
      image:'https://images.unsplash.com/photo-1571660336069-a551b9ff9c45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYyfHxmcnVpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'PINAPPLE',
      para:' The pineapple is a tropical plant.',
      pills:["Color","Test","Smell","Sweet","Size"],
      remainingPillsCount:3,
    },
    {
      id: 2,
      image:'https://images.unsplash.com/photo-1597045315639-9df6c171fb69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'APPLE',
      para:"Apples are among the world's most popular fruits.",
      pills:["Season","Color","Test","Smell","Sweet","Size","vitamins"],
      remainingPillsCount:5
    },
    {
      id: 3,
      image:'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'STRAWBERRY',
      para:'Strawberries improve heart function',
      pills:["Smell","Sweet","Color","Test","Size","Season"],
      remainingPillsCount:4
    },
  ];

  changedInformation: any = [
    {
      id: 1,
      image:'https://images.unsplash.com/photo-1571660336069-a551b9ff9c45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYyfHxmcnVpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'pinapple',
      para:' this has a rosette of pointed leaves up to 90 cm.',
      pills:["Vitamins","Taste","Smell","Sweet","Size","Season"],
      remainingPillsCount:4
    },
    {
      id: 2,
      image:'https://images.unsplash.com/photo-1597045315639-9df6c171fb69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'apple',
      para:"This fruit is good for health.",
      pills:["Healthy","Energy-Booster","Test","Smell","Sweet","Size","aroma"],
      remainingPillsCount:5
    },
    {
      id: 3,
      image:'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'strawberry',
      para:'The fruit is appreciated for its characteristic aroma',
      pills:["Aroma","Juicy","Color","Test","Size"],
      remainingPillsCount:3
    },
  ];
  changeEvent(){
    this.information=this.changedInformation;
  }
}
