import { CommonModule, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue = true;
  public itens = [{ name: 'Elson' }];
  public listItem = [];
  public switchCondition = 'A';

  public constructor() {
    setTimeout(() => {
      this.isTrue = false;
    }, 3000);
  }

  public loadingData$: Observable<string[]> = of([
    'Angular',
    'React',
    'Vue',
    'Svelte',
  ]).pipe(delay(3000));

  public trackByFn(index: number): number {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}
