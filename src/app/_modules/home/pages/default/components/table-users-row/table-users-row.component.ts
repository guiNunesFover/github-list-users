import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/domain/entitys/user.model';
import { HomeWebService } from 'src/app/_modules/home/services/home.web-service';

@Component({
    selector: 'table-users-row',
    templateUrl: './table-users-row.component.html',
    styleUrls: ['./table-users-row.component.scss']
})
export class TableUsersRowComponent implements OnInit
{
    @Input() user: UserModel;
    @Input() index: number;
    @ViewChild('rowItemDetailsButton', { static: false }) rowItemDetailsButton: ElementRef;
    @ViewChild('rowItemRemoveButton', { static: false }) rowItemRemoveButton: ElementRef;
    public isShowDetails: boolean;
    public isShowRepositoryModal: boolean;

    constructor(public _homeWebService: HomeWebService) {}
    ngOnInit(): void 
    {
        setTimeout(() => this.rowItemDetailsButton.nativeElement.setAttribute('data-testid',`table-users-row-id-${this.index}-details-button`), 10);
        setTimeout(() => this.rowItemRemoveButton.nativeElement.setAttribute('data-testid',`table-users-row-id-${this.index}-remove-button`), 10);
    }
}