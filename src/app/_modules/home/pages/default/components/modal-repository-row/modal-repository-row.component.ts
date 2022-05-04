import { Component, Input } from '@angular/core';
import { RepositoryModel } from 'src/app/domain/entitys/repository.model';

@Component({
    selector: 'modal-repository-row',
    templateUrl: './modal-repository-row.component.html',
    styleUrls: ['./modal-repository-row.component.scss']
})
export class ModalRepositoryRowComponent 
{
    @Input() repo: RepositoryModel;
}