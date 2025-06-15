import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'janna-ian-subtitle',
  template: `
    <div class="subtitle" [ngClass]="{ 'left': alignText === 'left' }">
      <h3>
        {{ title }}
      </h3>
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

      &.left {
        align-items: flex-start;
        text-align: left;
        gap: 10px;
      }
    }
    .lemon-slice {
      height: 30px;
      width: 30px;
    }
  `,
  standalone: true,
  imports: [CommonModule]
})

export class SubtitleComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() showLemonIcon!: boolean;
  @Input() alignText: 'center' | 'left' = 'center';
}