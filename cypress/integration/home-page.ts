describe('Page Home', () => 
{
    beforeEach(() => 
    {
        cy.visit('/home');
    });
  
    it('Verificando se o título está correto', () => 
    {
        cy.title().should('equal', 'List user Github');
    });

    it('Verifica a mensagem de warning de uma pesquisa vazia', () => 
    {
        cy.get('[data-testid="button-id-1"]').click();
        cy.get('[data-testid="card-notification"]').first();
        cy.get('[data-testid="card-notification-message"]').first().should('have.text', 'Nenhuma valor foi digitado. Digite e tente novamente...');
    });

    it('Verifica uma pesquisa correta, e verifica se o modal está sendo aberto, e quando fechado é redirecionado para a tabela dos usuários', () => 
    {
        // Realizando a pesquisa
        const login = 'foveradm';
        cy.get('[data-testid="input-id-1"]').type(login);
        cy.get('[data-testid="button-id-1"]').click();
        cy.get('[data-testid="modal-user-details-id-login"]').should('have.text', login);

        // Fechando o modal e verificando se está sendo redirecionado para a tabela
        cy.get('[data-testid="modal-icon-close-id"]').click();
        cy.get('[data-testid="table-users-id"]').should('be.visible');
    });

    it('Verifica se clicando no detalhes do usuário, ele abre o modal de detalhes novamente', () => 
    {
        // Realizando a pesquisa
        const login = 'foveradm';
        cy.get('[data-testid="input-id-1"]').type(login);
        cy.get('[data-testid="button-id-1"]').click();
        cy.get('[data-testid="modal-user-details-id-login"]').should('have.text', login);

        // Fechando o modal e verificando se está sendo redirecionado para a tabela
        cy.get('[data-testid="modal-icon-close-id"]').click();
        cy.get('[data-testid="table-users-id"]').should('be.visible');

        // Clicando em detalhes do primeiro usuário
        cy.get('[data-testid="table-users-row-id-0-details-button"]').click();
        cy.get('[data-testid="modal-user-details-id-login"]').should('have.text', login);
    });

    it('Verifica se removendo o último item da tabela, se o usuário é redirecionado para a tela de pesquisa', () => 
    {
        // Realizando a pesquisa
        const login = 'foveradm';
        cy.get('[data-testid="input-id-1"]').type(login);
        cy.get('[data-testid="button-id-1"]').click();
        cy.get('[data-testid="modal-user-details-id-login"]').should('have.text', login);

        // Fechando o modal e verificando se está sendo redirecionado para a tabela
        cy.get('[data-testid="modal-icon-close-id"]').click();
        cy.get('[data-testid="table-users-id"]').should('be.visible');
        
        // Clicando em remover o ultimo item da tabela
        cy.get('[data-testid="table-users-row-id-0-remove-button"]').click();
        cy.get('[data-testid="search-user-id"]').should('be.visible');

        // Verifica a mensagem de sucesso
        cy.get('[data-testid="card-notification-message"]').first().should('have.text', 'Usuário removido com sucesso.');
    });
});