import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('son') son: any;
  title = 'ng-todo-list';
  run(): void {
    console.log('11111111111111111111111');
  }
  sayHello(val): void {
    console.log(val, 'hello angular');
  }
  ngAfterViewInit(): void {
    console.log(this.son.aaa);
    this.son.bbb();
  }
}
