import { Component, OnInit } from '@angular/core';
import { ApifsService } from 'src/app/apifs.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  start: string = ""
  destination: string = ""
  date: Date = new Date()
  time: Date = new Date()

  solutions: any = []
  isFetching: boolean = false;

  constructor(private api: ApifsService) { }

  ngOnInit(): void {
  }

  onSearchStart(e: string): void {
    this.start = e;
  }
  onSearchDestination(e: string): void {
    this.destination = e;
  }
  onSearch(): void {
    this.start = "BARI ( TUTTE LE STAZIONI )"
    this.destination = "BARLETTA"

    this.isFetching = true;
    this.api.solutions(
      this.start,this.destination, 'A', 'A', this.date.toLocaleDateString("it-IT"), this.time.getHours().toString(), "1", "0", (false)
    )
    .subscribe(result => {
      this.solutions = result
      this.isFetching = false
    }, err => {
      console.log(err);
      this.isFetching = false
    })
  }

}
