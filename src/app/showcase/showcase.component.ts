import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
	addStatus = 'Не добавлено';
	statusClass = 'error';
	newGameName;
	newGameRate;
	newGameComment;
	gamesList = [
		{
			title: 'Fallout 2',
			grade: 9.8,
			comment: 'Старо и заебато как мир'
		},
		{
			title: 'Bloodborne',
			grade: 8.9,
			comment: 'Приятная жопоболь'
		},
		{
			title: 'Spider-Man',
			grade: 8.4,
			comment: 'Каком, ребята, это же спудик!'
		},
	]

  constructor() { }

  ngOnInit() {
  }

  setNewGameName(event) {
  	this.newGameName = event.target.value;
  }

  setNewGameRate(event) {
  	this.newGameRate = event.target.value;
  }

  setNewGameComment(event) {
  	this.newGameComment = event.target.value;
  }

  addGame(name, grade,comment) {
  	this.addStatus = 'Добавлено!';
  	this.statusClass = 'success';

  	this.gamesList.push({
  		title: name,
		grade: grade,
		comment: comment
	})
  }

  inputTypeControl(e) {
  	this.newGameName = e.target.value;
  }

}
