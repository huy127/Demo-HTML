class QuizUI {
    constructor(quiz) {
      this.quiz = quiz;
      this.questionContainer = document.getElementById("question-container");
      this.choiceContainer = document.getElementById("choice-container");
      this.previousButton = document.getElementById("previous-button");
      this.nextButton = document.getElementById("next-button");
      this.submitButton = document.getElementById("submit-button");
      this.restartButton = document.getElementById("restart-button")
      this.scoreContainer = document.getElementById("score-container");
      this.currentQuestionIndex = 0;
      this.userAnswers = new Array(this.quiz.questions.length).fill(null);
      this.restartButton.addEventListener("click", this.onRestartButtonClick.bind(this));
      this.previousButton.addEventListener("click", this.onPreviousButtonClick.bind(this));
      this.nextButton.addEventListener("click", this.onNextButtonClick.bind(this));
      this.submitButton.addEventListener("click", this.onSubmitButtonClick.bind(this));    
    } 
    displayCurrentQuestion() {    
      const currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      this.questionContainer.textContent = currentQuestion.question;
      this.choiceContainer.innerHTML = "";
      for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choice = currentQuestion.choices[i];
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = i;
        input.addEventListener("change", this.onChoiceChange.bind(this, i));
        li.appendChild(input);
        li.appendChild(document.createTextNode(choice));
        this.choiceContainer.appendChild(li);
  
        if (this.userAnswers[this.currentQuestionIndex] === i) {
          input.checked = true;
          const isCorrect = currentQuestion.correctAnswer === i;
          const span = document.createElement("span");
          span.textContent = isCorrect ? "You are correct!" : "You are incorrect.";
          span.style.color = isCorrect ? "green" : "red";
          li.appendChild(span);
          this.radio();
        }
      }
  
      if (this.currentQuestionIndex === 0) {
        this.previousButton.disabled = true;
      } else {
        this.previousButton.disabled = false;
      }
  
      if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
        this.nextButton.disabled = true;
        this.submitButton.disabled = false;
      } else {
        this.nextButton.disabled = false;
        this.submitButton.disabled = true;
      }
    }

    radio(){
        const radios = document.querySelectorAll("input[type='radio']");
  radios.forEach((radio) => {
    radio.disabled = true;
  });
    }
  
    onChoiceChange(choiceIndex) {
      const previousChoiceIndex = this.userAnswers[this.currentQuestionIndex];
      if (previousChoiceIndex !== null) {
        const previousLi = this.choiceContainer.childNodes[previousChoiceIndex];
        const previousSpan = previousLi.querySelector("span");
        if (previousSpan) {
          previousLi.removeChild(previousSpan);
        }
      }
      this.userAnswers[this.currentQuestionIndex] = choiceIndex;
      const currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      const isCorrect = currentQuestion.correctAnswer === choiceIndex;
      const span = document.createElement("span");
      span.textContent = isCorrect ? "  You are correct!" : "   You are incorrect.";
      span.style.color = isCorrect ? "green" : "red";
      const li = this.choiceContainer.childNodes[choiceIndex];
      li.appendChild(span);
      this.radio();
    }
  
    onPreviousButtonClick() {
      this.currentQuestionIndex--;
      this.displayCurrentQuestion();
      this.radio();
    }
  
    onNextButtonClick() {
      this.currentQuestionIndex++;
      this.displayCurrentQuestion();
    }
  
    onSubmitButtonClick() {
      let score = 0;
      for (let i = 0; i < this.quiz.questions.length; i++) {
        const question = this.quiz.questions[i];
        const userAnswer = this.userAnswers[i];
        if (userAnswer!== null && question.correctAnswer === userAnswer) {
            score++;
          }
        }
        const percentage = Math.ceil((score / this.quiz.questions.length) * 100);
        this.scoreContainer.textContent = `You scored ${score} out of ${this.quiz.questions.length} (${percentage}%)`;
        this.nextButton.disabled = true;
        this.submitButton.disabled = true;
    }

    onRestartButtonClick() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.quiz.questions.length).fill(null);
        this.scoreContainer.textContent = "";
        this.displayCurrentQuestion();
        this.nextButton.disabled = false;
        this.submitButton.disabled = true;
      }
      
}
  