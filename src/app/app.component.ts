import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Components } from './components/components.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableComponent } from './components/template/template-deferrable/template-deferrable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Components,
    TemplateControlFlowComponent,
    TemplateDeferrableComponent,
  ],
  templateUrl: './app.component.html',
  template: `<app-components></app-components>
    <h2>Hello World</h2>
    <app-template-control-flow /> `,
  //styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeiro-projeto-latest';
}
