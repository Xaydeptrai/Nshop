import {Component, Renderer2} from '@angular/core';
import {NgClass, NgOptimizedImage, NgStyle} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent{

  hoveredButtons: boolean[] = [false, false, false, false, false, false]; // Mảng lưu trạng thái hover của từng button

  // Phương thức để thiết lập trạng thái hover của từng button
  setHovered(index: number, isHovered: boolean): void {
    this.hoveredButtons[index] = isHovered;
  }

  // Phương thức để trả về style cho mỗi button dựa trên trạng thái hover
  getButtonStyles(index: number): any {
    return {
      'background-color': this.hoveredButtons[index] ? '#9D3045' : 'rgba(159,50,71,0.06)',
      'color': this.hoveredButtons[index] ? '#FFFFFF' : '#000000'
    };
  }
}
