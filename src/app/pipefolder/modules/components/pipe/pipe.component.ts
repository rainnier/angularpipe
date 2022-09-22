import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  date = new Date();
  mystring = 'the quick brown fox jumps'
  mystring2 = 'The High and the ENORMOUS'

  price = 23.34568
  mathematician = 3.1415926

  x = 1/3

  mytitle = "Hello World!"
  
  constructor() { }

  ngOnInit(): void {
  }

}
