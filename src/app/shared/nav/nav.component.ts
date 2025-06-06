import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuAnimation, MenuLemonAnimation } from './animations';
import { DetectDeviceService } from '../services/detect-device.service';
import { filter, tap } from 'rxjs';

interface NavItem {
  title: string,
  isActive: boolean,
  lastActive: boolean,
}

@Component({
  selector: 'janna-ian-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  animations: [MenuAnimation, MenuLemonAnimation]
})
export class NavComponent implements OnInit {
  public navItems = [
    {
      title: 'home',
      isActive: false,
      lastActive: false,
    },
    {
      title: 'dresscode',
      isActive: false,
      lastActive: false,
    },
    {
      title: 'locatie',
      isActive: false,
      lastActive: false,
    },
    {
      title: 'cadeau',
      isActive: false,
      lastActive: false,
    },
    {
      title: 'rsvp',
      isActive: false,
      lastActive: false,
    },
  ];
  public isMobileMenuOpen = false;
  public detectDeviceService = inject(DetectDeviceService);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      tap((event: NavigationEnd) => {
        const pageTitle = event.url.slice(1);
        this.navItems = this.navItems.map((navItem: NavItem, index: number) => {
          return {
            title: navItem.title,
            isActive: navItem.title === pageTitle || (index === 0 && pageTitle.length === 0),
            lastActive: navItem.lastActive,
          }
        })
      }),
    )
    .subscribe();
  }

  public navigate(navItem: string): void {
    this.isMobileMenuOpen = false;
    this.navItems = this.navItems.map((item: NavItem) => {
      return {
        title: item.title,
        isActive: item.title === navItem,
        lastActive: false,
      }
    })
    this.router.navigate([navItem]);
  }

  public openMobileMenu(): void {
    this.isMobileMenuOpen = true;
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
