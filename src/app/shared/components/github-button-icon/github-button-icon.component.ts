import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubButtonIconTypeEnum } from './github-button-icon-type.enum';

@Component({
    selector: 'github-button-icon',
    templateUrl: './github-button-icon.component.html',
    styleUrls: ['./github-button-icon.component.scss']
})

export class GithubButtonIconComponent
{
    @Input() type: GithubButtonIconTypeEnum | string = GithubButtonIconTypeEnum.secondary;
    @Input() icon: string;
    @Input() disabled: boolean;
    @Input() tooltipMessage: string;
    @Input() marginTop: number;
    @Input() marginBottom: number;
    @Input() marginRight: number;
    @Input() marginLeft: number;
    @Output() clickEmit = new EventEmitter();
}
