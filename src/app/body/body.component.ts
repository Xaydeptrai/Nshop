import { Component } from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
