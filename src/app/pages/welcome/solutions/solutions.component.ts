import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  start: string = ''
  destination: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSearchStart(e: string[]): void {
    console.log(e)
  }
  onSearchDestination(e: string[]): void {
    console.log(e)
  }

}
