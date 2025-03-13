import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, Result } from './quiz.types';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (!showResult) {
      <div class="quiz-header">
        <h1 class="quiz-title">Qual linguagem de programação combina com você?</h1>
        <p class="quiz-subtitle">Responda essas perguntas e descubra qual linguagem de programação mais combina com sua personalidade! 🚀</p>
        
        <img 
          [src]="questions[currentQuestion].image" 
          alt="Quiz illustration" 
          class="quiz-image"
        >
        
        <div class="progress-container">
          <div class="progress-text">
            <span>Pergunta {{ currentQuestion + 1 }} de {{ questions.length }}</span>
            <span>{{ Math.round((currentQuestion + 1) / questions.length * 100) }}% completo</span>
          </div>
          <div class="progress-bar">
            <div class="progress" [style.width.%]="(currentQuestion + 1) / questions.length * 100"></div>
          </div>
        </div>
        
        <div class="question">
          {{ questions[currentQuestion].text }}
        </div>
        
        <div class="options">
          @for (option of questions[currentQuestion].options; track option) {
            <div 
              class="option" 
              [class.selected]="selectedOption === option"
              (click)="selectOption(option)"
            >
              {{ option }}
            </div>
          }
        </div>
        
        @if (selectedOption) {
          <button class="btn" style="margin-top: 30px;" (click)="nextQuestion()">
            {{ currentQuestion === questions.length - 1 ? '✨ Ver Meu Resultado!' : 'Próxima Pergunta →' }}
          </button>
        }
      </div>
    } @else {
      <div class="result-card">
        <h2 class="result-title">Você é {{ result.language }}! 🎉</h2>
        <img [src]="result.image" alt="Result illustration" class="quiz-image">
        <p class="result-description">{{ result.description }}</p>
        <button class="btn" (click)="restartQuiz()">Fazer o Quiz Novamente</button>
      </div>
    }
  `
})
export class QuizComponent {
  Math = Math;

  questions: Question[] = [
    {
      text: 'Como você prefere resolver problemas?',
      options: [
        'De forma estruturada e organizada',
        'Com criatividade e flexibilidade',
        'De maneira prática e direta',
        'Pensando nos detalhes e na segurança'
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZiMjBmZjM4NjE0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xT9IgzoKnwFNmISR8I/giphy.gif'
    },
    {
      text: 'Qual é o seu ambiente de trabalho ideal?',
      options: [
        'Um escritório corporativo organizado',
        'Um espaço criativo e descontraído',
        'Home office com total liberdade',
        'Um ambiente colaborativo com muita interação'
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM2ZjM4M2M0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/LmNwrBhejkK9EFP504/giphy.gif'
    },
    {
      text: 'O que você mais valoriza em um projeto?',
      options: [
        'Eficiência e performance',
        'Inovação e originalidade',
        'Simplicidade e praticidade',
        'Segurança e confiabilidade'
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzJmZjM4M2M0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/qgQUggAC3Pfv687qPC/giphy.gif'
    },
    {
      text: 'Como você lida com prazos?',
      options: [
        'Planejo tudo com antecedência',
        'Deixo a criatividade fluir naturalmente',
        'Foco no essencial primeiro',
        'Analiso todos os detalhes antes de começar'
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZmZjM4M2M0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/E6jscXfv3AkWQ/giphy.gif'
    },
    {
      text: 'Qual é o seu hobby favorito?',
      options: [
        'Jogos de estratégia',
        'Arte e música',
        'Esportes',
        'Leitura e pesquisa'
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTZmZjM4M2M0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26tn33aiTi1jkl6H6/giphy.gif'
    }
  ];

  results: Result[] = [
    {
      language: 'Java',
      description: 'Você é estruturado, organizado e valoriza a estabilidade. Java é a sua cara: uma linguagem robusta, confiável e amplamente utilizada no mercado corporativo. Você tem um perfil analítico e gosta de construir soluções duradouras! 💼',
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZiMjBmZjM4NjE0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xT9IgzoKnwFNmISR8I/giphy.gif'
    },
    {
      language: 'Python',
      description: 'Criativo e versátil, você se adapta facilmente a diferentes situações. Python reflete sua personalidade: simples, flexível e com múltiplas possibilidades. Você tem um dom natural para resolver problemas de forma elegante! 🐍',
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM2ZjM4M2M0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/LmNwrBhejkK9EFP504/giphy.gif'
    },
    {
      language: 'JavaScript',
      description: 'Dinâmico e adaptável, você gosta de criar coisas interessantes. JavaScript é perfeito para você: versátil, popular e presente em todo lugar na web. Sua criatividade não tem limites quando se trata de desenvolvimento! 🌟',
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzJmZjM4M2M0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/qgQUggAC3Pfv687qPC/giphy.gif'
    },
    {
      language: 'TypeScript',
      description: 'Você valoriza organização com flexibilidade. TypeScript combina com seu perfil: oferece segurança e estrutura, mantendo a versatilidade do JavaScript. Você é o equilíbrio perfeito entre inovação e confiabilidade! 🎯',
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZmZjM4M2M0ZWJmNDM5NjQ4NmU1NjBjYWM2YzFhZjI1NjI4YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/E6jscXfv3AkWQ/giphy.gif'
    }
  ];

  currentQuestion = 0;
  selectedOption: string | null = null;
  showResult = false;
  result: Result = this.results[0];
  answers: string[] = [];

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    if (this.selectedOption) {
      this.answers.push(this.selectedOption);
      
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.selectedOption = null;
      } else {
        this.calculateResult();
        this.showResult = true;
      }
    }
  }

  calculateResult() {
    const organized = this.answers.filter(a => 
      a.includes('estruturada') || 
      a.includes('corporativo') || 
      a.includes('eficiência') ||
      a.includes('planejo') ||
      a.includes('estratégia')
    ).length;

    const creative = this.answers.filter(a => 
      a.includes('criativ') || 
      a.includes('flexib') || 
      a.includes('inovação') ||
      a.includes('arte') ||
      a.includes('naturalmente')
    ).length;

    const practical = this.answers.filter(a => 
      a.includes('prática') || 
      a.includes('liberdade') || 
      a.includes('simplicidade') ||
      a.includes('essencial') ||
      a.includes('esportes')
    ).length;

    const detailed = this.answers.filter(a => 
      a.includes('segurança') || 
      a.includes('detalhe') || 
      a.includes('confiabilidade') ||
      a.includes('analiso') ||
      a.includes('leitura')
    ).length;

    const scores = [organized, creative, practical, detailed];
    const maxScore = Math.max(...scores);
    const resultIndex = scores.indexOf(maxScore);
    
    this.result = this.results[resultIndex];
  }

  restartQuiz() {
    this.currentQuestion = 0;
    this.selectedOption = null;
    this.showResult = false;
    this.answers = [];
  }
}