import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GithubNotificationStatusEnum } from '../enum/github-notification.enum';
import { GithubNotificationModel } from '../model/github-notification.model';

@Injectable({
    providedIn: 'root'
})
export class GithubNotificationService 
{
    public notifier = new Subject<GithubNotificationModel>();

    private notify(_status: GithubNotificationStatusEnum, _title: string, _message: string[], _extraInfo?: string, _traceId?: string): void
    {
        this.notifier.next({
            status: _status,
            title: _title,
            message: _message,
            extraInfo: _extraInfo
        });
    }

    public success(_message: string[], _title: string = 'Sucesso', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(GithubNotificationStatusEnum.success, _title, _message, _extraInfo, _traceId);
    }

    public danger(_message: string[], _title: string = 'Erro', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(GithubNotificationStatusEnum.danger, _title, _message, _extraInfo, _traceId);
    }

    public info(_message: string[], _title: string = 'Informação', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(GithubNotificationStatusEnum.info, _title, _message, _extraInfo, _traceId);
    }
    
    public warning(_message: string[], _title: string = 'Atenção', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(GithubNotificationStatusEnum.warning, _title, _message, _extraInfo, _traceId);
    }
}
