import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'janna-ian-cadeau',
  standalone: true,
  imports: [
    SubtitleComponent
  ],
  templateUrl: './cadeau.component.html',
  styleUrl: './cadeau.component.scss'
})
export class CadeauComponent {
  public clipboard = inject(Clipboard);
  public title = 'La felicità è reale solo quando è condivisa'
  public subtitle = 
    `Jullie aanwezigheid is voor ons het grootste cadeau. 
    Voor wie toch graag een extra gebaar wil maken, zouden 
    wij een centje om onze huwelijksreis naar Italia 
    te maken enorm waarderen.`

  public copyToClipboard(): void {
    this.clipboard.copy('BE44143112368945')
  }
}
