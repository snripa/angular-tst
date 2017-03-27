import { Component } from '@angular/core';

export class Hero{
	id: number;
	name: string;
}

const HEROES: Hero[] = [
	{id:11, name:'Mr Good'},
	{id:12, name:'Mr Bad'},
	{id:13, name:'Mr Nice'},
	{id:14, name:'Mr Awesome'},
	{id:15, name:'Mr Evil'},
	{id:16, name:'Mr Better'},
	{id:17, name:'Mr Gorgeous'},
	{id:18, name:'Mr Fantastic'},
	{id:19, name:'Mr Pushy'},
	{id:20, name:'Mr Daddy'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Tour of heros';
  heroes = HEROES;
}

