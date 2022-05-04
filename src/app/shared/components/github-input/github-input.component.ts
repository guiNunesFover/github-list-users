import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'github-input',
    templateUrl: './github-input.component.html',
    styleUrls: ['./github-input.component.scss']
})
export class GithubInputComponent implements OnInit
{
    @Input() id: number = 0;
    @Input() label: string;
    @Input() required: boolean;
    @Input() marginTop: number;
    @Input() marginBottom: number;
    @Input() marginRight: number;
    @Input() marginLeft: number;
    @Input() width: number;
    @Input() error: boolean;
    @Input() success: boolean;
    @Input() loading: boolean;
    @Input() iconLeft: string;
    @Input() iconRight: string;
    @Output() iconRightClick = new EventEmitter();
    @ViewChild('containerInput', { static: false }) containerInput: ElementRef;

    ngOnInit(): void 
    {
        setTimeout(() => 
        {
            const input = this.containerInput.nativeElement.getElementsByTagName('input')[0];
            input.setAttribute('data-testid',`input-id-${this.id}`);
        }, 100);
    }
}
