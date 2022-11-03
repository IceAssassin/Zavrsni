/// <reference types="cypress" />
import {loginPage} from '../page_objects/login';
import {general} from '../page_objects/general';

var token;

describe ('Zavrsni rad', () => {
    before ('Visit Login page and login', () => {
        cy.intercept ('POST', 'https://cypress.vivifyscrum-stage.com/login').as('login')
        cy.visit('/login');
        cy.url().should('contain', '/login')
            general.headerTitle.should('be.visible')
        .and('have.text', data.loginHeader);
        loginPage.login ();
        cy.wait('@login').then(intercept => {
            expect(intercept.response.statusCode).to.eq(201)

        })
    })

    it('Add Board', () => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards').as('newBoard')
        navigation.toBoardPage()
        cy.wait


    })

    it('Edit Board', () => {
        cy.intercept('GET', ' https://cypress-api.vivifyscrum-stage.com/api/v2/organizations-data').as('editBoard')
        navigation.toEditBoard
        cy.wait

    })

    it('Delete Board BE', () => {
        cy.request ({
            method: 'DELETE',
            url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/'${BoardID}`,

            headers: {
                authorisation: `${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })


    })
    
})

