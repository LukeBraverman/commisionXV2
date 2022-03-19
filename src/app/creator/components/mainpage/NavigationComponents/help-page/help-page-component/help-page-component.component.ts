import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-page-component',
  templateUrl: './help-page-component.component.html',
  styleUrls: ['./help-page-component.component.css']
})
export class HelpPageComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitHelpRequest(title: string, description: string) {

  }
}
