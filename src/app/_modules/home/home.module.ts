import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GitbuhBackgroundModalModule } from 'src/app/shared/components/github-background-modal/github-background-modal.module';
import { GithubButtonIconModule } from 'src/app/shared/components/github-button-icon/github-button-icon.module';
import { GithubButtonModule } from 'src/app/shared/components/github-buttons/github-button.module';
import { GithubInputModule } from 'src/app/shared/components/github-input/github-input.module';
import { GithubNotFoundModule } from 'src/app/shared/components/github-not-found/github-not-found.module';
import { GithubSmallLoadingModule } from 'src/app/shared/components/github-small-loading/github-small-loading.module';
import { FormFocusDirective } from 'src/app/shared/directives/form-focus.directive';
import { HomeRouting } from './home.routing';
import { SearchUserComponent } from './pages/default/components/search-user/search-user.component';
import { TableUsersRowComponent } from './pages/default/components/table-users-row/table-users-row.component';
import { TableUsersComponent } from './pages/default/components/table-users/table-users.component';
import { UserDetailsComponent } from './pages/default/components/user-details/user-details.component';
import { HomePage } from './pages/default/home.page';

@NgModule({
    declarations: [
        HomePage,
        UserDetailsComponent,
        FormFocusDirective,
        SearchUserComponent,
        TableUsersComponent,
        TableUsersRowComponent,
    ],
    imports: [
        CommonModule,
        HomeRouting,
        FormsModule,
        ReactiveFormsModule,
        GithubInputModule,
        GithubButtonIconModule,
        GithubButtonModule,
        GithubSmallLoadingModule,
        GitbuhBackgroundModalModule,
        GithubNotFoundModule,
        TooltipModule.forRoot(),
    ]
})
export class HomeModule {}