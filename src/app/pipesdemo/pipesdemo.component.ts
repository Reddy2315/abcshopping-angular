import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GreetPipe } from '../pipes/greet.pipe';

@Component({
  selector: 'app-pipesdemo',
  standalone: true,
  imports: [
    GreetPipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    PercentPipe,
    CurrencyPipe],
  templateUrl: './pipesdemo.component.html',
  styleUrl: './pipesdemo.component.css'
})
export class PipesdemoComponent {

  firstName:string = "Rama singh"
  title:string = "This is pipedemo";
  today = new Date();

  pno : number = 0.23;

  salary : number = 5000;

  myNum = 1234;

}
