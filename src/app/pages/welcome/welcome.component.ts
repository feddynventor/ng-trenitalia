import { Component, OnInit } from '@angular/core';
import { ApifsService } from 'src/app/apifs.service';


// interface Autocomplete extends Array<{ [key: string]: string }>{
//   name: string;
//   id: number;
//   tags: string[];
// }

interface Autocomplete extends Array<{}>{
  name: string;
  id: number;
  tags: string[];
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  start: string = ""
  destination: string = ""

  searchResult: string = ""
  stazione: string = ""

  constructor(private api: ApifsService) {
  }

  ngOnInit() {
  }

  autocomplete(name: string) {



  }
}
