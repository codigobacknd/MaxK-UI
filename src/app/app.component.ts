import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaxkFormComponent } from './maxk-form/maxk-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HttpClientModule, MaxkFormComponent]
})
export class AppComponent {
  title = 'maxk';
}
