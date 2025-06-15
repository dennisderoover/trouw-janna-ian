import { Component } from '@angular/core';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';

@Component({
  selector: 'aldero-dresscode',
  standalone: true,
  imports: [
    SubtitleComponent,
  ],
  templateUrl: './dresscode.component.html',
  styleUrl: './dresscode.component.scss'
})
export class DresscodeComponent {
  public readonly title = 'Dresscode inspiratie';
  public readonly subtitle = `
    Het thema van onze trouw is ‘Italian Summer’.
    Hieronder enkele foto’s en een kleurpalet ter inspiratie voor je feestoutfit. 
    Zeker niet verplicht, maar altijd fijn als je mee in het plaatje past!
  `
}
