import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Quotes';
  quotes: string[];

 constructor(){

   this.quotes = ["If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see.Let them see.",
   "Hide yourself in God, so when a man wants to find you he will have to go there first.",
   "I would rather be an artist than a leader. Ironically, a leader has to follow the rules.",
 "To bring up a child in the way he should go, travel that way yourself once in a while.",
"I may do some good before I am dead--be a sort of success as a frightful example of what not to do; and so illustrate a moral story.",
"It is not until you change your identity to match your life blueprint that you will understand why everything in the past never worked."];
}
}
