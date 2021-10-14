import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApifsService } from 'src/app/apifs.service';

@Component({
  selector: 'app-search-station',
  templateUrl: './search-station.component.html',
  styleUrls: ['./search-station.component.css']
})
export class SearchStationComponent implements OnInit {

  // @Output() search = new BehaviorSubject<Array<string>>([]);
  @Output() search = new BehaviorSubject<string>("");
  @Input() placeholder: string = "Cerca stazione";
  searchResult: string[] = []
  searchSelection: string = ""
  show: boolean = false;

  constructor(private api: ApifsService) {}

  ngOnInit(): void {
  }

  onChange(el: any): void {
    if (el.value=="") {
      this.show = false;
      this.searchSelection = ""
      this.searchResult = []
    } else {
      this.show = true;
      this.api.autocomplete(el.value).subscribe(
        data => {
          this.searchResult = data
        },
        err => {this.searchResult=[]}
        );
    }
  }

  onSearchSelection(selection: string): void {
    this.searchSelection = selection;
    this.search.next(selection)
    this.show = false;
  }

}
