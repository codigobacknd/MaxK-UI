import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-maxk-form',
  templateUrl: './maxk-form.component.html',
  styleUrls: ['./maxk-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class MaxkFormComponent {
  x!: number;
  y!: number;
  n!: number;
  result?: number;
  errorMessage: string = '';

  constructor(private apiService: ApiService) { }

  calculateMaxK(): void {
    this.apiService.calculateMaxK(this.x, this.y, this.n).subscribe({
      next: (response) => {
        this.result = response;
        this.errorMessage = '';
      },
      error: (error) => {
        if (error.error instanceof ErrorEvent) {
          this.errorMessage = "An error occurred: " + error.error.message;
        } else {
          this.errorMessage = this.getCustomErrorMessage(error.status);
        }
        console.error('There was an error!', error);
      }
    });
  }

  private getCustomErrorMessage(errorCode: number): string {
    switch (errorCode) {
      case 400:
        return "The value of X must be greater than 0. " +
               "The value of Y must be greater than or equal to 0 and less than X. " +
               "The value of N must be greater than or equal to Y.";
      case 404:
        return "The requested resource was not found.";
      default:
        return "An unexpected error occurred.";
    }
  }
}
