import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { WallpapersSectionComponent } from '../../home/wallpapers-section/wallpapers-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WallpapersSectionComponent, NgClass],
  templateUrl: './home-page.component.html',
  styles: `
    @keyframes scroll {
      0% {
        transform: translateY(0);
      }
      30% {
        transform: translateY(100px);
      }
    }

    svg #wheel {
      animation: scroll ease 1.5s infinite;
    }

    section {
      height: calc(100dvh);
    }

    .text-shadow {
      text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
    }

    .text-shadow-white {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.5);
    }
  `
})
export class HomePageComponent implements OnInit {
 textShadow: string = "";

 theme = localStorage.getItem("color-theme");

 changeShadow() {
  if (this.theme == "dark") {
    this.textShadow = "text-shadow-white";
  } else {
    this.textShadow = "text-shadow";
  }
 };

 ngOnInit(): void {
  this.changeShadow();
 }
}
