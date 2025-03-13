import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { QuizComponent } from './app/quiz/quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizComponent],
  template: `
    <header class="header">
      <div class="header-content">
        <h1 class="header-logo">BuzzFeed</h1>
      </div>
    </header>

    <div class="container">
      <div class="quiz-card">
        <app-quiz />
      </div>
    </div>
  `
})
export class App {}

bootstrapApplication(App);