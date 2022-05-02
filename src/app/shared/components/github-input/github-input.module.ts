import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GithubSmallLoadingModule } from '../github-small-loading/github-small-loading.module';
import { GithubInputComponent } from './github-input.component';

@NgModule({
    declarations: [
        GithubInputComponent
    ],
    imports: [
        CommonModule,
        GithubSmallLoadingModule
    ],
    exports: [
        GithubInputComponent
    ]
})
export class GithubInputModule {}