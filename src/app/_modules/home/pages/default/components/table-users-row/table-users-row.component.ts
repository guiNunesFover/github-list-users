import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/domain/entitys/user.model';
import { HomeWebService } from 'src/app/_modules/home/services/home.web-service';

@Component({
    selector: 'table-users-row',
    templateUrl: './table-users-row.component.html',
    styleUrls: ['./table-users-row.component.scss']
})
export class TableUsersRowComponent 
{
    @Input() user: UserModel;
    public isShowDetails: boolean;

    constructor(public _homeWebService: HomeWebService) {}
}