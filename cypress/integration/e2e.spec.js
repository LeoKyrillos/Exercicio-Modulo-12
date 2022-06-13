/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('login')
        cy.visit('produtos/')
        
    });

    afterEach(() => {
        cy.screenshot()        
    });


    it('Deve adicionar o produto 1', () => {

        cy.addProduto('Aether Gym Pant', '33', 'Brown', 2)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        cy.get('.woocommerce-message').should('contain',  '2 × “Aether Gym Pant” foram adicionados no seu carrinho.')
        
    });

    it('Deve adicionar o produto 2', () => {

        cy.addProduto('Abominable Hoodie', 'L', 'Red', 1)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
        cy.get('.woocommerce-message').should('contain',  '“Abominable Hoodie” foi adicionado no seu carrinho.')
        
    });

    it('Deve adicionar o produto 3', () => {

        cy.addProduto('Aero Daily Fitness Tee', 'S', 'Yellow', 1)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
        cy.get('.woocommerce-message').should('contain',  '“Aero Daily Fitness Tee” foi adicionado no seu carrinho.')
        
    });

    it('Deve adicionar o produto 4', () => {

        cy.get(':nth-child(8) > .page-numbers').click()
        cy.addProduto('Zoltan Gym Tee', 'S', 'Blue', 4)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
        cy.get('.woocommerce-message').should('contain',  '4 × “Zoltan Gym Tee” foram adicionados no seu carrinho.')

        cy.get('.top-cart-wishlist').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('[type="checkbox"]').check({ force: true })
       

        cy.get('.showlogin').click()
        cy.get('#username').type('aluno_ebac@teste.com').click()
        cy.get('#password').type('teste@teste.com').click()
        cy.get('.woocommerce-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click({ force: true })

        cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')        
    });


})