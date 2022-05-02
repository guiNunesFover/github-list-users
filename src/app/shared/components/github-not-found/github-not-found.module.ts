import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GithubNotFoundComponent } from './github-not-found.component';

@NgModule({
    declarations: [
        GithubNotFoundComponent
    ],
    imports: [
        CommonModule,
        TooltipModule.forRoot(),
    ],
    exports: [
        GithubNotFoundComponent
    ]
})

export class GithubNotFoundModule {}
