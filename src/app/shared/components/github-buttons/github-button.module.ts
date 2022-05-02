import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GithubButtonComponent } from './github-button.component';

@NgModule({
    declarations: [
        GithubButtonComponent
    ],
    imports: [
        CommonModule,
        TooltipModule.forRoot(),
    ],
    exports: [
        GithubButtonComponent
    ]
})

export class GithubButtonModule {}
