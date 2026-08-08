import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./components/test/test.component";
import { Details } from "./components/details/details";
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-root',
	imports: [TestComponent, Details, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, ProfitPipe, FormsModule],
	templateUrl: './app.html',
	styleUrls: ['./app.css']
})
export class App {
	protected readonly title = signal('movies-app');
	text = 'Text in the App Component.';
	today = new Date();
	imageUrl = 'https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_FMjpg_UX511_.jpg';
	price = 10;
	sellingPrice = 82.10;
	imageWidth = 128;
	attributeValue = 'movies-app-test-value';
	isSampleApplied = true;
	multipleClasses = 'sample-bg-color sample-color';
	multipleStyles = 'background-color: magenta; color: black;';
	bgColor = 'orchid';
	timeNow = new Date();
	setTimeToNow() {
		console.log(new Date());
		this.timeNow = new Date();
	}
	_color = '';
	setTextColor(color: string) {
		console.log(color);
		this._color = color;
	}
	fullName = 'Khusan Rashidov';
}
