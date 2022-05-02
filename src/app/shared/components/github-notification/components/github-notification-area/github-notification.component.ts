import { Component, Input, OnInit } from '@angular/core';
import { GithubNotificationModel } from '../../model/github-notification.model';
import { GithubNotificationService } from '../../services/github-notification.service';

@Component({
    selector: 'github-notification',
    templateUrl: './github-notification.component.html',
    styleUrls: ['./github-notification.component.scss']
})

export class GithubNotificationComponent implements OnInit
{
    @Input() durationSecond: number = 5;
    public listNotifications: Array<GithubNotificationModel> = [];

    constructor(
        private _githubSnackbarService: GithubNotificationService,
    ) {}

    ngOnInit(): void 
    {
        this._githubSnackbarService.notifier.subscribe(resp =>
        { 
            this.listNotifications.push({
                status: resp.status,
                title: resp.title,
                message: resp.message,
                extraInfo: resp.extraInfo,
                stateVisible: 'visible'
            });
        },
        error => console.error(error));
    }

    public closeCard(_itemNotification?: GithubNotificationModel): void
    {
        if (_itemNotification)
        {
            const indexOf = this.listNotifications.indexOf(_itemNotification);
            if (indexOf != -1)
            {
                this.listNotifications.splice(indexOf, 1);
            }
        }
    }
}
