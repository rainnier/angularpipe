import { Learner } from './learner';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularpiping';

  learnerForm: FormGroup

  constructor(fb: FormBuilder) {
    this.learnerForm = fb.group({
      name: [''],
      nickname: ['']
    })
  }

  submit(){}

}
