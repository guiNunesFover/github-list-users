import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'github-input',
    templateUrl: './github-input.component.html',
    styleUrls: ['./github-input.component.scss']
})
export class GithubInputComponent
{
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
}
