// @ts-check
import { Question } from "./Question.js";

export class Quiz{

    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions array of strings
     */    
    constructor(questions){
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question} question found
     */

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    isEnded(){
        return this.questions.length === this.questionIndex;
    }

    /**
     * 
     * @param {string} answer some text
     */
    guess(answer){

        if (this.getQuestionIndex().correctAnwser(answer)) {
            this.score++;
        }

        this.questionIndex++;
    }
}