import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('homepage-mental-blogger');

  resultString: string = '';

  constructor(private http: HttpClient) {}

  fetchString() {
    this.http.get('https://mental-blogger.onrender.com', { responseType: 'text' }).subscribe({
      next: (data) => {
        this.resultString = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  ngOnInit() {
    this.fetchString();
  }
}
