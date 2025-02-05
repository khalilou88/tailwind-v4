import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScFloatingLabel } from './floating-label';

@Component({
  selector: 'sc-root',
  imports: [RouterOutlet, ScFloatingLabel],
  template: `
    <h1 class="text-3xl font-bold underline">Hello, {{ title }}!</h1>



    <sc-floating-label />


    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  title = 'tailwind-v4';
}
