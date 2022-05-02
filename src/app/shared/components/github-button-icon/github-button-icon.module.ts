import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GithubButtonIconComponent } from './github-button-icon.component';

@NgModule({
    declarations: [
        GithubButtonIconComponent
    ],
    imports: [
        CommonModule,
        TooltipModule.forRoot(),
    ],
    exports: [
        GithubButtonIconComponent
    ]
})

export class GithubButtonIconModule {}
