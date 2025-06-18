import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'janna-ian-cadeau',
  standalone: true,
  imports: [
    SubtitleComponent
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(200%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(200%)' }))
      ])
    ])
  ],
  templateUrl: './cadeau.component.html',
  styleUrl: './cadeau.component.scss'
})
export class CadeauComponent {
  public showNotification = false;
  public clipboard = inject(Clipboard);
  public title = 'La felicità è reale solo quando è condivisa'
  public subtitle = 
    `Jullie aanwezigheid is voor ons het grootste cadeau. 
    Voor wie toch graag een extra gebaar wil maken, zouden 
    wij een centje om onze huwelijksreis naar Italia 
    te maken enorm waarderen.`

  public copyToClipboard(): void {
    this.clipboard.copy('BE04001898535631');
    this.showNotification = true;

    setTimeout(() => this.showNotification = false, 5000);
  }
}
