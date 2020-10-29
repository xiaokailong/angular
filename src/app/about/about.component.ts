import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  @Input() title: string;
  @Input() run: any;
  @Input() all: any;
  @Output() private outer = new EventEmitter<string>();
  constructor() { }
  private aaa = 'aaa';
  bbb(): void {
    console.log('bbb');
  }

  ngOnInit(): void {
    this.run();
    console.log(this.title);
    console.log('----------------------------');
    console.log(this.all.title);
    this.all.run();
    console.log('----------------------------');
    this.outer.emit('i am son-component');
  }

}
