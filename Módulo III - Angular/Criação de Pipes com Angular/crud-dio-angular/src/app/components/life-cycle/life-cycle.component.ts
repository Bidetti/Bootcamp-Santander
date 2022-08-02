import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() number = 10;

  constructor() {
    console.log('chamou o construtor')
  }

  ngOnChanges(): void {
    console.log('chamou o onchanges')
  }

  ngOnInit(): void {
    console.log('chamou o onInit')
  }

  ngDoCheck(): void {
    console.log('chamou o docheck')
  }
  
  ngAfterContentInit(): void {
    console.log('chamou o after content init')
  }

  ngAfterContentChecked(): void {
    console.log('content checked')
  }

  ngAfterViewChecked(): void {
    console.log('after view checked')
  }

  ngAfterViewInit(): void {
    console.log('after view init')
  }

  ngOnDestroy(): void {
    console.log('on destroy')
  }

}
