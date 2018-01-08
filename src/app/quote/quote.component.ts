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
    new Quote(1,'doing good and bad things to a man.','If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see.Let them see.'),
   new  Quote(2,'Hide yourself in GOd.','Hide yourself in God, so when a man wants to find you he will have to go there first.'),
  new Quote(3,'comparing artist and leaders.','I would rather be an artist than a leader. Ironically, a leader has to follow the rules.'),
 new Quote(4,'bringing up a child.','To bring up a child in the way he should go, travel that way yourself once in a while.'),
new Quote(5,'success before death.','I may do some good before I am dead--be a sort of success as a frightful example of what not to do; and so illustrate a moral story.'),
new Quote(6,'matching your life blueprint.','It is not until you change your identity to match your life blueprint that you will understand why everything in the past never worked.'),
]
completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1)
          }
        }
toogleDetails(index){
  this.quotes[index].showDescription =!this.quotes[index].showDescription;
}

  constructor() { }

  ngOnInit() {
  }

}
