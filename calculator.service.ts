import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiter = ",";
    let numberString = numbers;

    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 1);
      delimiter = parts[0].substring(2); // Get custom delimiter
      numberString = parts[1]; // Get the rest of the string
    }

    numberString = numberString.replace(/\n/g, delimiter); // Replace newlines with delimiter
    const numList = numberString.split(delimiter);

    const negatives: number[] = [];
    const total = numList.reduce((sum, num) => {
      const number = parseInt(num, 10);
      if (number < 0) {
        negatives.push(number);
      }
      return sum + number;
    }, 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return total;
  }
}
