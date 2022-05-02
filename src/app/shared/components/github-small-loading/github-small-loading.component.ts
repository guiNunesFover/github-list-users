import { Component, Input } from '@angular/core';

@Component({
    selector: 'github-small-loading',
    templateUrl: './github-small-loading.component.html',
    styleUrls: ['./github-small-loading.component.scss']
})

export class GithubSmallLoadingComponent
{
    @Input() positionAbsolute: boolean;
    @Input() top: number;
    @Input() right: number;
    @Input() left: number;
    @Input() bottom: number;
    @Input() marginTop: number;
    @Input() marginBottom: number;
    @Input() marginRight: number;
    @Input() marginLeft: number;
    @Input() width = 20;
}
