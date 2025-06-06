import { Injectable } from '@angular/core';

const MIN_DESKTOP_WIDTH_PX = 992;

@Injectable({providedIn: 'root'})
export class DetectDeviceService {
  private _isMobileDevice: boolean;

  get isMobileDevice(): boolean {
    return this._isMobileDevice;
  }

  constructor() {
    this._isMobileDevice = window.innerWidth < MIN_DESKTOP_WIDTH_PX;
  }
}