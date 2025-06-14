import { Component, Input } from '@angular/core';

@Component({
  selector: 'janna-ian-subtitle',
  template: `
    <div class="subtitle">
      <h4>
        {{ title }}
      </h4>
      @if (showLemonIcon) {
        <img src="assets/images/lemon_slice.png" alt="lemon-slice" class="lemon-slice">
      }
      <p>
        {{ subtitle }}
      </p>
</div>
  `,
  styles: `
    .subtitle {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      text-align: center;
    }
    .lemon-slice {
      height: 30px;
      width: 30px;
    }
  `,
  standalone: true,
})

export class SubtitleComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() showLemonIcon!: boolean;
}