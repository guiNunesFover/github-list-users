import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { GithubNotificationComponent } from './components/github-notification-area/github-notification.component';
import { GithubNotificationCardComponent } from './components/github-notification-card/github-notification-card.component';
import { GithubNotificationService } from './services/github-notification.service';

@NgModule({
    declarations: [
        GithubNotificationComponent,
        GithubNotificationCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GithubNotificationComponent
    ]
})

export class GithubNotificationModule 
{
    public static forRoot(): ModuleWithProviders<GithubNotificationModule>
    {
        return  {
            ngModule: GithubNotificationModule,
            providers: [GithubNotificationService]
        };
    }
}
