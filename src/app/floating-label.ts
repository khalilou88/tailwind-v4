import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-floating-label',
  imports: [],
  template: `
    <div
      class="p-8 max-w-sm grid grid-cols-[0.5fr_0.5fr] bg-white focus-within:**:data-[slot=label]:-translate-y-[22px] has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:-translate-y-[22px] has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:grow-0 focus-within:**:data-[slot=label-text]:grow-0 text-lg focus-within:**:data-[slot=label-text]:text-sm has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:text-sm"
    >
      <label
        data-slot="label"
        for="input-id"
        class="flex transition-[translate] ease-in-out duration-[250ms] row-start-1 col-start-1 col-span-2 z-10 items-center p-2"
      >
        <span
          data-slot="label-text"
          class="bg-red-500 px-2 grow transition-[flex-grow,padding,font-size] rounded-lg ease-in-out duration-[100ms]"
          >Label Text</span
        >
      </label>
      <!-- Need " " placeholder due to Safari weird behaviour -->
      <input
        id="input-id"
        data-slot="control"
        type="text"
        placeholder=" "
        class="border py-2 px-4 row-start-1 col-start-1 col-span-2 rounded-lg"
      />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFloatingLabel {}
