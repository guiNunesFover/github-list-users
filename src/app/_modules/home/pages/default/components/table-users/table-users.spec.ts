import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
import { HomeWebService } from "src/app/_modules/home/services/home.web-service";
import { TableUsersComponent } from "./table-users.component";

describe('TableUsers', () => 
{
    let injector: TestBed;
    let component: TableUsersComponent;
    let fixture: ComponentFixture<TableUsersComponent>;
    let homeWebService: HomeWebService;

    beforeEach(() =>
    {
        injector = getTestBed();
        fixture = TestBed.createComponent(TableUsersComponent);
        component = fixture.componentInstance;
        homeWebService = injector.get(HomeWebService);
        fixture.detectChanges();
    });

    it('Verificando a criação do component', () =>
    {
        expect(component).toBeTruthy();
        expect(homeWebService).toBeTruthy();
    });

    it('Verificando método: cleanFilter', () =>
    {
        component.cleanFilter();
        expect(component._homeWebService.userCache).toEqual(component.userListTemp);
        expect(component.userListTemp.length).toBe(0);
        expect(component.loginFieldSearch).toBe('');
    });
    
    it('Verificando método: filterLogin', () =>
    {
        component.loginFieldSearch = 'foverad';
        component._homeWebService.userCache = [
            { login: 'fover' },
            { login: 'foveradm' },
        ];
        
        component.filterLogin();
        expect(component.userListTemp.length).toBe(2);
        expect(component._homeWebService.userCache.length).toBe(1);
    });
});