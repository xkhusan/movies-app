import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'profit' })
export class ProfitPipe implements PipeTransform {
  transform(value: number, profitPercentage: number = 10): string {
    return ((value * profitPercentage) / 100).toFixed(2);
  }
}