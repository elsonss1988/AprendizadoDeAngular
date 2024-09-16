import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Components } from '../../components.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss',
})
export class TemplateVariablesComponent implements AfterViewInit {
  public name = 'new componente';
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement);

    setTimeout(() => {
      this.nameInput.nativeElement.value += ' you are amazing !!!';
    }, 10000);
  }
}
