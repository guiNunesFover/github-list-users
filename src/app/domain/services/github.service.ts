import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { StartModel } from "../entitys/start.model";
import { UserModel } from "../entitys/user.model";

@Injectable({
    providedIn: 'root'
})
export class GithubService
{
    private prefix = 'users';
    
    constructor(private _http: HttpClient) {}

    public getUsers(_login: string): Observable<UserModel>
    {
        return this._http.get<UserModel>(`${environment.apiGithub}/${this.prefix}/${_login}`);
    }
    
    public getStars(_login: string): Observable<StartModel[]>
    {
        return this._http.get<StartModel[]>(`${environment.apiGithub}/${this.prefix}/${_login}/starred`);
    }
}