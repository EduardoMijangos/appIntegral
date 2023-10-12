import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headar',
  templateUrl: './headar.component.html',
  styleUrls: ['./headar.component.scss'],
})
export class HeadarComponent  implements OnInit {
  
  @Input() titulo: string = '';

  constructor() { }


  ngOnInit() {}


}
