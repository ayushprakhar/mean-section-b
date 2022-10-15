import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-roll-no',
  templateUrl: './random-roll-no.component.html',
  styleUrls: ['./random-roll-no.component.css']
})
export class RandomRollNoComponent implements OnInit {
  randomrollno : number=0;
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }
  generateRandomrollno = () =>(
    this.randomrollno=Math.ceil(Math.random()*69)
  )
}
