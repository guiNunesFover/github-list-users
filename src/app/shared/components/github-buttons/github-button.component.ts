import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubButtonTypeEnum } from './github-button-type.enum';

@Component({
    selector: 'github-button',
    templateUrl: './github-button.component.html',
    styleUrls: ['./github-button.component.scss']
})

export class GithubButtonComponent
{
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
}
