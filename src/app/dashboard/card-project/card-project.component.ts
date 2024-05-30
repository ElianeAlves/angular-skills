import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {
  @Input() item

  openDoc(url: string){
    window.open(url, '_blank')
  }

}
