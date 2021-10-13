import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApifsService } from 'src/app/apifs.service';

@Component({
  selector: 'app-search-station',
  templateUrl: './search-station.component.html',
  styleUrls: ['./search-station.component.css']
})
export class SearchStationComponent implements OnInit {

  @Output() search = new BehaviorSubject<Array<string>>([]);
  searchResult: string[] = []
  searchSelection: string = ""

  constructor(private api: ApifsService) {}

  ngOnInit(): void {
  }

  onChange(el: any): void {
    if (el.value=="") {
      this.searchResult = []
    } else {
      this.api.autocomplete(el.value).subscribe(
        data => {
          this.searchResult = data
          this.search.next(data)
        },
        err => {this.searchResult=[]}
        );
    }
  }

}
