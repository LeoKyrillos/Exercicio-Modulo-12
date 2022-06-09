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
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        var quantidade = 2
        var quantidade1 = 1
        var somaquant = quantidade + quantidade1
        var quantidade2 = 1
        var somaquant1 = quantidade + quantidade1 + quantidade2
        var quantidade3 = 4
        var somaquant2 = quantidade + quantidade1 + quantidade2 + quantidade3

        
        cy.get('[class="product-block grid"]')
            .contains('Aether Gym Pant').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')

        
    
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', somaquant)
        cy.get('.woocommerce-message').should('contain', ' “Abominable Hoodie” foi adicionado no seu carrinho.')

   

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(quantidade2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', somaquant1)
        cy.get('.woocommerce-message').should('contain', ' “Aero Daily Fitness Tee” foi adicionado no seu carrinho.')
        
   

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(8) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            .contains('Zoltan Gym Tee').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade3)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', somaquant2)
        cy.get('.woocommerce-message').should('contain', quantidade3 + ' × “Zoltan Gym Tee” foram adicionados no seu carrinho.')
        
    
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