import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { UserModel } from 'src/app/domain/entitys/user.model';
import { GithubService } from 'src/app/domain/services/github.service';
import { GithubNotificationService } from 'src/app/shared/components/github-notification/services/github-notification.service';
import { HomeWebService } from '../../../../services/home.web-service';

@Component({
    selector: 'search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit
{
    public loading: boolean;
    public user: UserModel;
    public inputSearch = new FormControl('', [Validators.required]);

    constructor(
        private _githubService: GithubService,
        private _githubNotificationService: GithubNotificationService,
        public _homeWebService: HomeWebService,
    ) {}

    ngOnInit(): void 
    {
        this.initSearch();
    }
    
    public initSearch(): void
    {
        this.inputSearch.setValue('');
        this.user = null;
    }

    public search(): void
    {
        // Zerando o usuário para receber um novo obj
        this.user = null;

        // Verifica se o campo é válido e caso não seja, informa ao usuário
        if (this.inputSearch.invalid)
        {
            // Mensagem de erro
            this._githubNotificationService.warning(['Nenhuma valor foi digitado. Digite e tente novamente...']);
            return;
        }

        // Verifica se o campo está no formato de busca correto
        if (!this.fieldIsValid()) 
        {
            this._githubNotificationService.warning(['O campo está em um formato incorreto. Não pode ter espaço nos logins. Corrija e tente novamente...']);
            return;
        }

        // Primeiro verifica se essa busca já não foi realizando durante o uso da página
        if (this._homeWebService.getByLogin(this.inputSearch.value))
        {
            this._githubNotificationService.warning(['O usuário já foi listado. Tente novamente...']);
            return;
        }

        // Inicia o processo de busca do usuário
        this.loading = true;
        this._githubService.getUsers(this.inputSearch.value).pipe(
            take(1)
        ).subscribe(resp =>
        {
            this.loading = false;
            this.user = this._homeWebService.addUser(resp);
        },
        error =>
        {
            if (error.status == 404) this._githubNotificationService.warning(['Ops! Nenhum usuário foi encontrado. Tente com outro login.']);
            else this._githubNotificationService.danger(['Ops! Aconteceu alguma coisa de errado aqui em...']);
            
            this.loading = false;
            console.error(error);
        });
    }

    public fieldIsValid(): boolean
    {
        const splitField: string[] = this.inputSearch.value.split(" ");
        if (splitField.length > 1) return false;

        return true;
    }
}