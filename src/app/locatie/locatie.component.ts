import { Component, inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DetectDeviceService } from '../shared/services/detect-device.service';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';

const mapId = '864a1405d36d9f6';

enum Destination {
  LIER,
  HOF_VAN_BEATRIJS
}

interface Location {
  lat: number,
  lng: number,
  marker: HTMLElement
}

@Component({
  selector: 'aldero-locatie',
  standalone: true,
  imports: [
    SubtitleComponent,
    GoogleMapsModule,
    CommonModule,
    SlickCarouselModule,
  ],
  templateUrl: './locatie.component.html',
  styleUrl: './locatie.component.scss'
})
export class LocatieComponent {
  public detectDeviceService = inject(DetectDeviceService);
  public options: google.maps.MapOptions = 
  this.detectDeviceService.isMobileDevice ? 
    {
      mapId: mapId,
      center: { lat: 51.1373, lng: 4.577 },
      zoom: 14,
      disableDefaultUI: true,
    }
  :
    {
      mapId: mapId,
      center: { lat: 51.1373, lng: 4.577 },
      zoom: 14.8,
      disableDefaultUI: true,
    }
  public locations: Location[];
  public eDestionation = Destination;
  public images = [
    { src: 'assets/images/hof_van_beatrijs_1.jpg' },
    { src: 'assets/images/hof_van_beatrijs_2.jpg' },
    { src: 'assets/images/hof_van_beatrijs_3.jpg' },
    { src: 'assets/images/hof_van_beatrijs_4.jpg' },
  ]
  public slideConfig = {
    'arrows': true,
    'prevArrow': `
      <i class="fa-solid fa-circle-chevron-left previous"></i>
    `,
    'nextArrow': `
      <i class="fa-solid fa-circle-chevron-right next"></i>
    `,
    'mobileFirst': true,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'dots': true,
  };

  constructor() {
    const parser = new DOMParser();
    const svgString = `
      <svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#243179" /></svg>
    `
    this.locations = [
      {
        lat: 51.131,
        lng: 4.570,
        marker: parser.parseFromString(svgString, "image/svg+xml").documentElement
      },
      {
        lat: 51.142,
        lng: 4.583,
        marker: parser.parseFromString(svgString, "image/svg+xml").documentElement
      },
    ]
  }

  public getDirections(destination: Destination): void {
    let url;

    switch (destination) {
      case Destination.LIER:
        url = 'https://www.google.com/maps/dir//Stadhuis%20Lier';
        break;
      case Destination.HOF_VAN_BEATRIJS:
        url = 'https://www.google.com/maps/dir//Hof%20Van%20Beatrijs';
        break;
    }

    window.open(url, "_blank");
  }
}
