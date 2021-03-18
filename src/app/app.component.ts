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
      para:'Pineapple (Ananas comosus) is an incredibly delicious and healthy tropical fruit. It originated in South America',
      pills:["Color","Test","Smell","Sweet","Size"],
    },
    {
      id: 2,
      image:'https://images.unsplash.com/photo-1597045315639-9df6c171fb69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'APPLE',
      para:"Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus",
      pills:["Season","Color","Test","Smell","Sweet","Size","vitamins"],
    },
    {
      id: 3,
      image:'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'STRAWBERRY',
      para:'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries',
      pills:["Smell","Sweet","Color","Test","Size","Season"],
    },
  ];

  changedInformation: any = [
    {
      id: 1,
      image:'https://images.unsplash.com/photo-1571660336069-a551b9ff9c45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYyfHxmcnVpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'pinapple',
      para:' this has a rosette of pointed leaves up to 90 cm.Pineapple (Ananas comosus) is an incredibly delicious',
      pills:["Vitamins","Sweet","Size"],
    },
    {
      id: 2,
      image:'https://images.unsplash.com/photo-1597045315639-9df6c171fb69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'apple',
      para:"This fruit is good for health. An apple is an edible fruit produced by an apple tree",
      pills:["Healthy","Energy-Booster","Test","Smell","Sweet","Size","aroma"],
    },
    {
      id: 3,
      image:'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'strawberry',
      para:'The fruit is appreciated for its characteristic aroma The garden strawberry is a widely grown hybrid species ',
      pills:["Aroma","Juicy","Color","Test","Size"],
    },
  ];
  changeEvent(){
    this.information=this.changedInformation;
  }
}
