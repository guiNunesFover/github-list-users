import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
import { HomeWebService } from "../../services/home.web-service";
import { HomePage } from "./home.page";

describe('HomePage', () => 
{
    let injector: TestBed;
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let homeWebService: HomeWebService;

    beforeEach(() =>
    {
        injector = getTestBed();
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        homeWebService = injector.get(HomeWebService);
        fixture.detectChanges();
    });

    it('Verificando a criação do component', () =>
    {
        expect(component).toBeTruthy();
        expect(homeWebService).toBeTruthy();
    });
    
    it('Verificando os dados usados no component', () =>
    {
        expect(homeWebService.isShowSearch).toBeTruthy();
        expect(homeWebService.userCache).toBeTruthy();
    });
});