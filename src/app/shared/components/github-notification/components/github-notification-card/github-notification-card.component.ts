import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GithubNotificationModel } from '../../model/github-notification.model';

@Component({
    selector: 'github-notification-card',
    templateUrl: './github-notification-card.component.html',
    styleUrls: ['./github-notification-card.component.scss'],
    animations: [
        trigger('fade', [
            state('hidden', style({ opacity: 0, 'margin-right': '-460px' })),
            state('visible', style({ opacity: 1, 'margin-right': '*' })),
            transition('hidden => visible', animate('0.3s ease-in')),
            transition('visible => hidden', animate('0.3s ease-out')),
            transition('void => visible', [
                style({ opacity: 0, 'margin-right': '-460px' }),
                animate('0.3s ease-in')
            ])
        ])
    ]
})

export class GithubNotificationCardComponent implements OnInit, OnDestroy
{
    @Input() item: GithubNotificationModel;
    @Input() durationSecond: number;
    @Output() close = new EventEmitter<GithubNotificationModel>();
    public currentTime: number = 0;
    public barLineStype: { width?: string } = { width: '0%' }; // Realiza o design da progress bar
    private stop: boolean;
    private subscription = new Subscription();

    ngOnInit(): void 
    {
        this.subscription.add(timer(0, 10)
        .pipe(
            tap(() => {
                if (!this.stop)
                {
                    this.currentTime++;
                    this.calcProgressBar();
                }
            }),
        ).subscribe(() =>
        {
            if (this.currentTime >= (this.durationSecond * 100))
            {
                this.closeCard();
            }
        }));
    }

    ngOnDestroy(): void 
    {
        this.subscription.unsubscribe();
    }

    private calcProgressBar(): void
    {
        this.barLineStype.width = `${(this.currentTime / (this.durationSecond * 100)) * 100}%`;
    }

    public closeCard(): void
    {
        this.item.stateVisible = 'hidden';
        setTimeout(() => 
        {
            this.close.emit(this.item);    
        }, 300);
    }

    public fadeStopCard(): void
    {
        this.stop = !this.stop;
    }
}
