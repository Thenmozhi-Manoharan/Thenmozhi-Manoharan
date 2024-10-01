import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  numbers: string = '';
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private calculatorService: CalculatorService) {}

  calculate() {
    this.errorMessage = null;
    this.result = null;

    try {
      this.result = this.calculatorService.add(this.numbers);
    } catch (error) {
      this.errorMessage = error.message;
    }
  }
}
