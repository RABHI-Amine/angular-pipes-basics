import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!:string;
  date!:string;
  amount!:string;

  height!:string;

  onNameChange(name:string){
    this.name = name;
  }

  onDateChange(date:string){
    this.date = date;
  }

  onAmountChange(amount:string){
    this.amount = amount
  }

  onHeightChange(height:string){
    this.height = height;
  }

}
