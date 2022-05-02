import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GithubSmallLoadingComponent } from './github-small-loading.component';

@NgModule({
    declarations: [GithubSmallLoadingComponent],
    imports: [CommonModule],
    exports: [GithubSmallLoadingComponent]
})

export class GithubSmallLoadingModule {}
