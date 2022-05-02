import { Component, Input } from '@angular/core';

@Component({
    selector: 'github-not-found',
    templateUrl: './github-not-found.component.html',
    styleUrls: ['github-not-found.component.scss']
})

export class GithubNotFoundComponent
{
    @Input() marginTop: number;
    @Input() marginBottom: number;
    @Input() tooltipMessage: string;
    @Input() message: string = 'Nenhum retorno!';
    @Input() fontSize: number = 13;
    @Input() fontWidth: number;
}
