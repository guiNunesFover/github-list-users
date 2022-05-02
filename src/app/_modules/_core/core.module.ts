import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubMenuTopModule } from 'src/app/shared/components/github-menu-top/github-menu-top.module';
import { GithubNotificationModule } from 'src/app/shared/components/github-notification/github-notification.module';
import { ThemeEnum, ThemeModule } from 'src/app/shared/theme';
import { CoreRouting } from './core.routing';
import { CorePage } from './pages/default/core.page';

@NgModule({
    declarations: [
        CorePage,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreRouting,
        GithubMenuTopModule,
        GithubNotificationModule,
        ThemeModule.forRoot({
            active: ThemeEnum.light
        })
    ],
    bootstrap: [
        CorePage,
    ]
})

export class CoreModule {}