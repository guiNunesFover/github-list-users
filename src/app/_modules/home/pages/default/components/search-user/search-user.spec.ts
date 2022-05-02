import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
import { Observable, of, throwError } from "rxjs";
import { UserModel } from "src/app/domain/entitys/user.model";
import { GithubService } from "src/app/domain/services/github.service";
import { HomeWebService } from "src/app/_modules/home/services/home.web-service";
import { SearchUserComponent } from "./search-user.component";

export class MockGithubService
{
    getUsers(_login: string): Observable<UserModel> { return null };
}

describe('SearchUser', () => 
{
    let injector: TestBed;
    let component: SearchUserComponent;
    let fixture: ComponentFixture<SearchUserComponent>;
    let homeWebService: HomeWebService;
    let githubService: GithubService;

    beforeEach(async () => 
    {
        TestBed.configureTestingModule({
            providers: [
                { provide: GithubService, useClass: MockGithubService }
            ]
        })
    });

    beforeEach(() =>
    {
        injector = getTestBed();
        fixture = TestBed.createComponent(SearchUserComponent);
        component = fixture.componentInstance;
        homeWebService = injector.get(HomeWebService);
        githubService = injector.get(GithubService);
        fixture.detectChanges();
    });

    it('Verificando a criação do component', () =>
    {
        expect(component).toBeTruthy();
        expect(homeWebService).toBeTruthy();
        expect(githubService).toBeTruthy();
    });
    
    it('Verificando as variaveis usadas no component', () =>
    {
        expect(component.initSearch).toBeTruthy();
    });
    
    it('Verificando método: initSearch', () =>
    {
        component.initSearch();
        expect(component.user).toBeNull();
        expect(component.inputSearch.value).toBe('');
    });

    it('Verificando método: fieldIsValid - Invalid', () =>
    {
        component.inputSearch.setValue('fover adm');
        const result = component.fieldIsValid();
        expect(result).toBeFalse();
    });
    
    it('Verificando método: fieldIsValid - Valid', () =>
    {
        component.inputSearch.setValue('foveradm');
        const result = component.fieldIsValid();
        expect(result).toBeTrue();
    });

    it('Verificando método: search - Valid', () =>
    {
        const loginReturn = 'foveradm';
        const user: UserModel = { login: loginReturn };
        spyOn(githubService, 'getUsers').and.returnValue(of(user));
        
        component.inputSearch.setValue(loginReturn);
        component.search();
        expect(component.user.login).toBeTruthy();
    });

    it('Verificando método: search - Invalid', () =>
    {
        const loginReturn = 'fover adm';
        const user: UserModel = { login: loginReturn };
        spyOn(githubService, 'getUsers').and.returnValue(of(user));
        
        component.inputSearch.setValue(loginReturn);
        component.search();
        expect(component.user).toBeNull();
    });

    it('Verificando método: search - 400', () =>
    {
        const errorReponse = { 
            status: 400,
         };
        spyOn(githubService, 'getUsers').and.returnValue(throwError(errorReponse));
        
        component.search();
        expect(component.user).toBeNull();
    });
});