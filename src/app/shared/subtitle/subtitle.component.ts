import { Component, Input } from '@angular/core';

@Component({
  selector: 'janna-ian-subtitle',
  template: `
    <div class="subtitle">
      <h4>
        {{ title }}
      </h4>
      <p>
        {{ subtitle }}
      </p>
</div>
  `,
  styles: `
    .subtitle {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  `,
  standalone: true,
})

export class SubtitleComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}