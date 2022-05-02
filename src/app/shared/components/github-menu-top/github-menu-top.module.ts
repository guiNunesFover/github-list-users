import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GithubMenuTopComponent } from './github-menu-top.component';

@NgModule({
    declarations: [
        GithubMenuTopComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        GithubMenuTopComponent
    ],
})
export class GithubMenuTopModule {}