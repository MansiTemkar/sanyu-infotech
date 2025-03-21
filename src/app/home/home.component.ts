import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.startCounterAnimation();
  }

  startCounterAnimation() {
    const counters = document.querySelectorAll('[data-toggle="counter-up"]');
    
    counters.forEach((counter) => {
      let target = parseInt(counter.textContent || '0', 10);
      let count = 0;
      let speed = target / 100; // Adjust speed of counting

      const updateCounter = () => {
        if (count < target) {
          count += speed;
          counter.textContent = Math.ceil(count).toString();
          requestAnimationFrame(updateCounter); // Smooth animation
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    });
  }

  
}