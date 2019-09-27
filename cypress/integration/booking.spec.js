describe('Booking tab test', function () {
    it('Test booking tab', function () {
        cy.visit('http://localhost:3000/')
    });

    it('Test initial state of booking screen', function () {
        // Room-1 should be enabled and others should be disabled.
        cy.get('[data-testid=room-0]').should('not.have.attr', 'disabled');
        cy.get('[data-testid=room-1]').should('have.attr', 'disabled');
        cy.get('[data-testid=room-2]').should('have.attr', 'disabled');
        cy.get('[data-testid=room-3]').should('have.attr', 'disabled');
    });

    it('Select a new room', function () {
        // Selecting room-2 should not enable it and should not affect others(3,4).
        cy.get('[data-testid=room-1]').find('input').click();
        cy.get('[data-testid=room-0]').should('not.have.attr', 'disabled');
        cy.get('[data-testid=room-1]').should('not.have.attr', 'disabled');
        cy.get('[data-testid=room-2]').should('have.attr', 'disabled');
        cy.get('[data-testid=room-3]').should('have.attr', 'disabled');
    });
    it('Unselect a room ', function () {
        // Unselecting room-2 should not disable it and should not affect others(3,4).
        cy.get('[data-testid=room-1]').find('input').click();
        cy.get('[data-testid=room-0]').should('not.have.attr', 'disabled');
        cy.get('[data-testid=room-1]').should('have.attr', 'disabled');
        cy.get('[data-testid=room-2]').should('have.attr', 'disabled');
        cy.get('[data-testid=room-3]').should('have.attr', 'disabled');
    });

})