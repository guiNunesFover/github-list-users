import { Component, OnInit } from '@angular/core';
import { HomeWebService } from '../../services/home.web-service';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit
{
    constructor(public _homeWebService: HomeWebService) {}
    
    ngOnInit(): void 
    {
        this.hasUser();
    }

    private hasUser(): void
    {
        if (this._homeWebService.userCache.length <= 0) this._homeWebService.isShowSearch = true;
    }
}