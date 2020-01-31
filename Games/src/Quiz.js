import React,{Component} from 'react';
import QuizOptions from './QuizOptions';
import classNames from "classnames";
class Quiz extends Component{

    constructor(props){
        super(props);

        let riddle = this.playGame();

        this.state = {riddle};
        this.renderOptions = this.renderOptions.bind(this);
        this.checkResults = this.checkResults.bind(this);
        this.play=this.play.bind(this);
    }
    generateRandomOptions(sum){
            let result=sum;
            let resultsArray=[];
            let randomNumberArray=[];
            while(randomNumberArray.length<=3){
                let randomNumber=this.randomNumber(1,19);
                if(randomNumberArray.indexOf(randomNumber) > -1) continue;
                randomNumberArray.push(randomNumber);

            }

            for(let i=0;i<3;i++)
            {
                let addSubtract = this.randomNumber(0,1);
            if(addSubtract === 1){
                //add the number to thee result
                result+=randomNumberArray[i];
            }
            else{
                //subtract the number from the result\
                result-=randomNumberArray[i];

            }
            resultsArray.push(result);
            }

            return resultsArray;
    }
    randomNumber(min,max){
        return Math.floor(Math.random()*(max-min+1)) + min;
    }
    playGame(){
        let field1=this.randomNumber(20,50);
        let field2=this.randomNumber(20,50);
        let result=field1+field2;
        let resultsArray = this.generateRandomOptions(result);
         resultsArray.push(result);
        resultsArray.sort(function(a,b){return 0.5 - Math.random()});
        let riddle={
            resultsArray,
            field1,
            field2,
            answer:result
        };
        if(this.state && this.state.gameOver){
            this.setState({riddle:riddle});
        }
        return riddle;
    }
    checkResults(){
        console.log("Check results called");
    }
    renderOptions(){
        return(
        <div className="options">
            {/*To loop through these options we use a map function to make it easier
            /*Each child in a list should have a unique "key" prop. thus we use key={i}
            */}
        {this.state.riddle.resultsArray.map((option,i)=>

            <QuizOptions options={option} key={i} checkResults={this.checkResults}/>
            )
        }
        </div>
        );
    }
    renderMessage(){
        if(this.state.correct){
            return <h3>Good Job! Hit it again</h3>
        }
        else{
            return <h3> ohh no! Hit the button below to play again</h3>
        }
    }
     play(){
       this.setState({correct:false,gameOver:false});
        this.playGame();
    }
    render(){
        return(
        <div className="quiz">
            <div className="quiz-content">
    <p className="question">What is the sum of <span className="text-info">{this.state.riddle.field1}</span> and <span className="text-info">{this.state.riddle.field2}</span>?</p>
                {this.renderOptions()}
            </div>
            <div className= {classNames("after",{"hide":!this.state.gameOver},{'wrong': !this.state.correct},{"correct":this.state.correct})}>
                {this.renderMessage()}
            </div>
            <div className="play-again">
                <a href="#" className="button" onClick={this.play}>Play Again</a>
                </div>
        </div>
        );
    }
}

export default Quiz;
