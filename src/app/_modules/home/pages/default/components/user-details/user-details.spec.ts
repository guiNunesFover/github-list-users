import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { StartModel } from "src/app/domain/entitys/start.model";
import { GithubService } from "src/app/domain/services/github.service";
import { HomeWebService } from "src/app/_modules/home/services/home.web-service";
import { UserDetailsComponent } from "./user-details.component";

export class MockGithubService
{
    getStars(_login: string): Observable<StartModel[]> { return null };
}

describe('UserDetails', () => 
{
    let injector: TestBed;
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;
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
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        homeWebService = injector.get(HomeWebService);
        githubService = injector.get(GithubService);
        
        // Criando a request correta 
        component.user = { login: 'foveradm' };
        const stars: StartModel[] = [{ name: 'test' }];
        spyOn(githubService, 'getStars').and.returnValue(of(stars));
        
        fixture.detectChanges();
    });

    it('Verificando a criação do component', () =>
    {
        expect(component).toBeTruthy();
        expect(homeWebService).toBeTruthy();
        expect(githubService).toBeTruthy();
    });
});