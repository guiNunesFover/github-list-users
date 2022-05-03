import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GithubButtonTypeEnum } from './github-button-type.enum';

@Component({
    selector: 'github-button',
    templateUrl: './github-button.component.html',
    styleUrls: ['./github-button.component.scss']
})

export class GithubButtonComponent implements OnInit
{
    @Input() id: number = 0;
    @Input() type: GithubButtonTypeEnum | string = GithubButtonTypeEnum.primary;
    @Input() disabled: boolean;
    @Input() tooltipMessage: string;
    @Input() marginTop: number;
    @Input() marginBottom: number;
    @Input() marginRight: number;
    @Input() marginLeft: number;
    @Input() width: number;
    @Input() height: number = 40;
    @Input() backgroundColor: string;
    @Input() color: string;
    @Input() borderRadius: number;
    @Input() borderColor: number;
    @Output() clickEmit = new EventEmitter();
    @ViewChild('button', { static: false }) button: ElementRef;

    ngOnInit(): void 
    {
        this.setTestId();
    }

    private setTestId(): void
    {
        setTimeout(() => this.button.nativeElement.setAttribute('data-testid',`button-id-${this.id}`), 10);
    }
}
