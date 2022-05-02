import { Component, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'github-background-modal',
  templateUrl: './github-background-modal.component.html',
  styleUrls: ['./github-background-modal.component.scss']
})
export class GithubBackgroundModalComponent implements OnChanges
{
  @Input() title: string = 'Add um título...';
  @Input() width: number;
  @Output() close = new EventEmitter();
  public left: string;
  
  ngOnChanges(): void 
  {
    this.left = `calc(50% - ${this.width / 2}px`;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler()
  {
    this.close.emit();
  }
}
