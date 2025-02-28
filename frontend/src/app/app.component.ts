import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Для использования общих директив, таких как ngIf и ngFor

@Component({
  selector: 'app-root',
  standalone: true,  // Убедись, что этот флаг стоит как true
  imports: [CommonModule], // если нужно использовать CommonModule или другие standalone компоненты
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
