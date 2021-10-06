export class UI{
    constructor(){}
    
    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question');
        questionTitle.innerHTML =text;
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices, callback){
        const choicesContainer =  document.getElementById('choices');
        choicesContainer.innerHTML = '';
        
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.className = 'button';
            button.addEventListener('click', () => {callback(choice)});

            choicesContainer.appendChild(button);
        });
    }

    /**
     * 
     * @param {number} score the total score of the questions
     */
    showScores(score){
        const gameOverHTML = `
        <h1>Result</h1>
        <h2 id="score">Your scores: ${score}</h2>
        `;
  
        const element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    }

    /**
     * 
     * @param {number} currentIndex index actually value
     * @param {number} total total questions
     */
    showProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerText = `Question ${currentIndex} of ${total}`;
    }
}