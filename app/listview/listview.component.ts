import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onAdd(e: Event) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  onRemove(e: Event) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }
}