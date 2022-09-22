import { Learner } from './learner';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'angularpiping';

  learnerForm: FormGroup
  ff: FormArray

  constructor(fb:FormBuilder) {
    this.learnerForm = fb.group({
      name: ['', [Validators.minLength(1), Validators.maxLength(7)]],
      /* name: [''], */
      nickname: [''],
      address: fb.group({
        bldgNo:[''],
        street:['']
      }),
      favoriteFoods:fb.array([])
    })
    this.ff = this.learnerForm.get('favoriteFoods') as FormArray
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.learnerForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

  submit(){
    console.log(this.learnerForm.get('name')?.errors)
    //console.log(this.learnerForm.getRawValue())
  }

  reset() {
    this.learnerForm.reset();
  }

  markNickName() {
    this.learnerForm.get('name')?.setValue('Aldrin')
  }

  addFavorite() {
    (this.learnerForm.get('favoriteFoods') as FormArray).push(new FormControl())
  }

  get name() {
    return this.learnerForm.get('name') as FormControl;
  }

}
