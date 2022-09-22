import { Learner } from './../../../../learner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  model:Learner = {
    name: 'Joan Arc',
    nickname: 'j-a'
  } 
  ngOnInit(): void {
  }

  submit() {
    console.log(this.model)
  }
}
