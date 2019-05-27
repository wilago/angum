import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.component.html',
  styleUrls: ['./choose-project.component.scss']
})
export class ChooseProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



}
