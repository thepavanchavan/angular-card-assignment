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
      id:1,
      image: 'https://images.unsplash.com/photo-1571660336069-a551b9ff9c45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYyfHxmcnVpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'PINAPPLE',
      before: " The pineapple is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae.",
      after: " The pineapple is indigenous to South America, where it has been cultivated for many centuries. The pineapple is a tropical plant with an edible fruit",
    },
    {
      id:2,
      image: 'https://images.unsplash.com/photo-1597045315639-9df6c171fb69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'APPLE',
      before: "Apples are among the world's most popular fruits. They grow on the apple tree that is (Malus domestica)",
      after: ", originally from Central Asia. Apples are high in fiber, vitamin C, and various antioxidants. They are also very filling, considering their low calorie count.",
    },
    {
      id:3,
      image: 'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'STRAWBERRY',
      before: "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, ",
      after: " which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.",
    }
  ];
}
