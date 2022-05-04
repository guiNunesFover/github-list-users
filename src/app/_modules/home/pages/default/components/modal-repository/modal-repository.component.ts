import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/domain/entitys/user.model';
import { GithubService } from 'src/app/domain/services/github.service';
import { FunctionsHelp } from 'src/app/shared/helpers/functions.help';
import { OrderByModel } from 'src/app/shared/models/order-by.model';
import { HomeWebService } from 'src/app/_modules/home/services/home.web-service';
import { TableReposOrderEnum } from './enums/table-repos-order.enum';

@Component({
    selector: 'modal-repository',
    templateUrl: './modal-repository.component.html',
    styleUrls: ['./modal-repository.component.scss']
})
export class ModalRepositoryComponent implements OnInit
{
    @Input() user: UserModel;
    @Output() close = new EventEmitter();
    public orderBy = new OrderByModel(TableReposOrderEnum.name);
    public loading: boolean;

    constructor(
        private _githubService: GithubService,
        public _homeWebService: HomeWebService,
        public _functionsHelp: FunctionsHelp,
    ) {}

    ngOnInit(): void 
    {
        if (!this.user.repos || this.user.repos.length <= 0) this.getListRepos();
    }

    private getListRepos(): void
    {
        this.loading = true;
        this._githubService.getRepositories(this.user.login).subscribe(resp =>
        {
            this.user.repos = resp;
            this.orderByRepoList(this.orderBy.name);
            this.loading = false;
        },
        error =>
        {
            console.error(error);
            this.loading = false;
        });
    }

    public orderByRepoList(_typeBy: TableReposOrderEnum | string): void
    {   
        // Verificando se é o mesmo item de ordenação, caso seja, mudar a direção de ordenação,
        // Caso não seja o mesmo, setar o nome objeto de ordenação
        if (this.orderBy.name == _typeBy) this.orderBy.direction = !this.orderBy.direction;
        else 
        {
            this.orderBy.name = _typeBy;
            this.orderBy.direction = true;
        }

        this.user.repos = this._functionsHelp.orderBy(this.user.repos, this.orderBy);
    }
}