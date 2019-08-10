import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.scss']
})
export class ShowcaseItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  itemName:string = 'God Of War';
  itemDescription:string = 'Прям топчик, мальчик';
  itemGrade:number = 9.6;

}
