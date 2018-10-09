import {Component} from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css']
})


export class DetailsComponent {
  ShowParagraph = false;
  buttonclicks = [];
  howmuch=0;

  onDisplayDetails(){
    this.ShowParagraph = !this.ShowParagraph;
    this.buttonclicks.push(new Date());
    this.howmuch++;
  }
}
