import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '@shared/models/slide';

@Component({
  selector: 'fcs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slides!: Slide[];

  currentIndex = 0;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const slides = document.getElementsByClassName('slide');
      slides.item(this.currentIndex)?.classList.remove('fade');
      this.currentIndex = this.getIndex(this.currentIndex);
      slides.item(this.currentIndex)?.classList.add('fade');
    }, 5000);
  }

  showSlide(index: number): void {
    this.currentIndex = index;
  }

  private getIndex(index: number): number {
    return index + 1 >= this.slides.length ? 0 : (index += 1);
  }
}
