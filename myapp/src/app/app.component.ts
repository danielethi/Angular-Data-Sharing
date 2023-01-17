import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentSoldItem="Laptop"
items=['Desktop','Charger','Battery']
addItems(newItem:string){
this.items.push(newItem)
}
}
