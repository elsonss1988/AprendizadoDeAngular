import { Component, ViewChild } from '@angular/core';
import { TemplateBindingComponent } from './template/template-binding/template-binding.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [TemplateBindingComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class Components {}
