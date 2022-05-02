import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { StartModel } from 'src/app/domain/entitys/start.model';
import { UserModel } from 'src/app/domain/entitys/user.model';
import { GithubService } from 'src/app/domain/services/github.service';
import { GithubNotificationService } from 'src/app/shared/components/github-notification/services/github-notification.service';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit
{
    @Input() user: UserModel;
    @Output() close = new EventEmitter();
    public loading: boolean;
    public listStars: StartModel[] = [];

    constructor(
        private _githubService: GithubService,
        private _githubNotificationService: GithubNotificationService,
    ) {}

    ngOnInit(): void 
    {
        this.getStars();
    }

    private getStars(): void
    {
        // Verifica se o campo é válido e caso não seja, informa ao usuário
        if (!this.user.login)
        {
            // Mensagem de erro
            this._githubNotificationService.warning(['O valor de login não foi informado.']);
            return;
        }

        // Inicia o processo de busca da lista de stars do usuário
        this.loading = true;
        this._githubService.getStars(this.user.login).pipe(
            take(1)
        ).subscribe(resp =>
        {
            this.loading = false;
            this.listStars = resp;
        },
        error =>
        {
            this._githubNotificationService.danger(['Ops! Aconteceu alguma coisa de errado aqui em...']);
            this.loading = false;
            console.error(error);
        });
    }
}