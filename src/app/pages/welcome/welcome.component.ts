import { Component, OnInit } from '@angular/core';
import { ApifsService } from 'src/app/apifs.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private api: ApifsService) {
  }

  ngOnInit() {
  }

}
