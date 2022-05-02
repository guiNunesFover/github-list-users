import { Component } from '@angular/core';
import { UserModel } from 'src/app/domain/entitys/user.model';
import { HomeWebService } from 'src/app/_modules/home/services/home.web-service';

@Component({
    selector: 'table-users',
    templateUrl: './table-users.component.html',
    styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent 
{
    public loading: boolean;
    public loginFieldSearch: string;
    public userListTemp: UserModel[] = [];

    constructor(public _homeWebService: HomeWebService) {}

    public filterLogin(): void
    {
        // Caso a lista temporária esteja vazia, recebe os valores da lista principal
        if (this.userListTemp.length <= 0) this.userListTemp = this._homeWebService.userCache;

        // Verifica se o campo está vazio
        if (!this.loginFieldSearch && this.userListTemp.length > 0)
        {
            this.cleanFilter();
            return;
        }
        
        this._homeWebService.userCache = this.userListTemp.filter(x => x.login.toLowerCase().includes(this.loginFieldSearch.toLocaleLowerCase()));
    }

    public cleanFilter(): void
    {
        this._homeWebService.userCache = this.userListTemp;
        this.userListTemp = [];
        this.loginFieldSearch = '';
    }
}