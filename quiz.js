class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  answerCurrentQuestion(answer) {
    if (this.getCurrentQuestion().correctAnswer === answer) {
      this.score++;
    }
  }

  goToNextQuestion() {
    this.currentQuestionIndex++;
  }

  goToPreviousQuestion() {
    this.currentQuestionIndex--;
  }

  isLastQuestion() {
    return this.currentQuestionIndex === this.questions.length - 1;
  }
  
  isFirstQuestion() {
    return this.currentQuestionIndex === 0;
  }
  
  getScore() {
    return this.score;
  }
  
  reset() {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}

module.exports = Quiz;
