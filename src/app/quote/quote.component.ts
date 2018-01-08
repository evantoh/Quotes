import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'App Quotes';
  quotes = [
    new Quote(1,'doing good and bad things to a man.','If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see.Let them see.',new Date(2018,3,14)),
   new  Quote(2,'Hide yourself in GOd.','Hide yourself in God, so when a man wants to find you he will have to go there first.,',new Date(2018,2,15)),
  new Quote(3,'comparing artist and leaders.','I would rather be an artist than a leader. Ironically, a leader has to follow the rules.',new Date(2018,1,28)),
 new Quote(4,'bringing up a child.','To bring up a child in the way he should go, travel that way yourself once in a while.',new Date(2018,6,13)),
new Quote(5,'success before death.','I may do some good before I am dead--be a sort of success as a frightful example of what not to do; and so illustrate a moral story.',new Date(2018,3,13)),
new Quote(6,'matching your life blueprint.','It is not until you change your identity to match your life blueprint that you will understand why everything in the past never worked.',new Date(2018,4,177)),
]
deleteGoal(isComplete,index){
       if (isComplete){
           let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

           if(toDelete){
               this.quotes.splice(index,1)
           }
       }
   }
completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1)
          }
        }
        addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)
}
toogleDetails(index){
  this.quotes[index].showDescription =!this.quotes[index].showDescription;
}

like : number= 2;
    dislike : number =5;
    // x:string = "-1"

    likes(){
      this.like = this.like+1;
    }
    dislikes(){
      this.dislike = this.dislike+1;
    }

  constructor() { }

  ngOnInit() {
  }

}
