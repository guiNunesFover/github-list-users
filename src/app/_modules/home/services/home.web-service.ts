import { Injectable } from "@angular/core";
import { UserModel } from "src/app/domain/entitys/user.model";
import { GithubNotificationService } from "src/app/shared/components/github-notification/services/github-notification.service";
import { FunctionsHelp } from "src/app/shared/helpers/functions.help";
import { OrderByModel } from "src/app/shared/models/order-by.model";
import { TableUsersOrderEnum } from "../pages/default/components/table-users/enums/table-users-order.enum";

@Injectable({
    providedIn: 'root'
})
export class HomeWebService
{
    public isShowSearch: boolean;
    public userCache: UserModel[] = [];
    public orderBy = new OrderByModel(TableUsersOrderEnum.name, true);

    constructor(
        private _githubNotificationService: GithubNotificationService,
        private _functionsHelp: FunctionsHelp,
    ) {}

    public addUser(_user: UserModel): UserModel
    {
        this.userCache.push(_user);
        return _user;
    }

    public removeUser(_login: string): void
    {
        // Verifica se o usuário realmente existe
        const exist = this.getByLogin(_login);
        if (!exist)
        {
            this._githubNotificationService.warning(['Nenhum usuário foi encontrado com esse login. Verifique e tente novamente.']);
            return;
        }

        // Remove o usuário encontrado da lista
        const indexOf = this.userCache.indexOf(exist);
        this.userCache.splice(indexOf, 1);
        this._githubNotificationService.success(['Usuário removido com sucesso.']);

        // Verifica se a lista está vazia, e envia para a tela de busca
        if (this.userCache.length <= 0) this.isShowSearch = true;
    }

    public getByLogin(_login: string): UserModel
    {
        const exist = this.userCache.find(x => x.login == _login);
        if (!exist) return null;

        return exist;
    }

    public orderListBy(_typeBy: TableUsersOrderEnum | string): void
    {
        if (!_typeBy)
        {
            this._githubNotificationService.warning(['É necessário informar o tipo de ordenação da tabela.']);
            return;
        }
        
        // Verificando se é o mesmo item de ordenação, caso seja, mudar a direção de ordenação,
        // Caso não seja o mesmo, setar o nome objeto de ordenação
        if (this.orderBy.name == _typeBy) this.orderBy.direction = !this.orderBy.direction;
        else 
        {
            this.orderBy.name = _typeBy;
            this.orderBy.direction = true;
        }

        // Realizando a ordenação
        this.userCache = this._functionsHelp.orderBy(this.userCache, this.orderBy);
    }
}