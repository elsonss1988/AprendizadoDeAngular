import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesComponent } from '../template-variables/template-variables.component';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule, TemplateVariablesComponent],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent implements AfterViewInit {
  public name = 'Elcio';
  public age = 36;
  public isDisabled = true;
  public course = 'Angular';
  public srcImg = 'https://angular.io/assets/images/logos/angular/angular.png';
  public isTextDecoration = this.name === 'Elcio' ? 'underline' : 'none';
  public c = 1;

  @ViewChild(TemplateVariablesComponent)
  public templateVariables!: TemplateVariablesComponent;
  ngAfterViewInit(): void {
    console.log(this.templateVariables.name);
  }

  public constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      this.name = 'Elson';
    }, 5000);
  }

  public nextAge() {
    return this.age + 1;
  }

  public sum(a: number, b: number) {
    this.c = a + b;
    return this.c;
  }

  public sumAge() {
    return this.age++;
  }

  public subAge() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    console.log('Hello');
    console.log(event);
  }

  public onMouseMove(event: Event) {
    console.log('Hello');
    console.log(event);
  }
}
