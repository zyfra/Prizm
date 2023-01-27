describe('doc', () => {
  let innerHeight: number;
  let innerWidth: number;
  before(() => {
    cy.visit('/components/toast');
    cy.window().then(window => {
      innerWidth = window.innerWidth;
      innerHeight = window.innerHeight;
    });
  });

  const ids = {
    showByIdBtn: '.show-toast-by-id[prizmButton]',
    closeByIdBtn: '.close-toast-by-id[prizmButton]',
    toastId: '#prizm-toast-idour-id-1',
    topMiddleRadio: 'prizm-radio-button.toast-position-button-tm',
    topLeftRadio: 'prizm-radio-button.toast-position-button-tl',
    topRightRadio: 'prizm-radio-button.toast-position-button-tr',
    bottomMiddleRadio: 'prizm-radio-button.toast-position-button-bm',
    bottomLeftRadio: 'prizm-radio-button.toast-position-button-bl',
    bottomRightRadio: 'prizm-radio-button.toast-position-button-br',
  };

  describe('show/hide toast', { defaultCommandTimeout: 500 }, async () => {
    it('show', () => {
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should('exist');
    });
    it('hide', () => {
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should('exist');

      cy.get(ids.closeByIdBtn).click();
      cy.get(ids.toastId).should('not.exist');
    });
  });

  describe('show in top position', { defaultCommandTimeout: 500 }, async () => {
    it('show in top left position', () => {
      cy.get(ids.topLeftRadio).click();
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should(el => {
        expect(el.position().top).equal(10);
        expect(el.position().left).equal(10);
      });
      cy.get(ids.closeByIdBtn).click();
    });
    it('show in top right position', () => {
      cy.get(ids.topRightRadio).click();
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should(el => {
        const position = el.get()[0].getBoundingClientRect();
        expect(position.top).eq(10);
        expect(innerWidth - position.right).eq(10);
      });
      cy.get(ids.closeByIdBtn).click();
    });

    it('show in top middle position', () => {
      cy.get(ids.topMiddleRadio).click();
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should(el => {
        const position = el.get()[0].getBoundingClientRect();
        expect(position.top).eq(10);
        expect(innerWidth - position.right).gt(10);
        expect(position.left).gt(10);
      });
      cy.get(ids.closeByIdBtn).click();
    });
  });

  describe('show in bottom position', { defaultCommandTimeout: 500 }, async () => {
    it('show in bottom left position', () => {
      cy.get(ids.bottomLeftRadio).click();
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should(async el => {
        const position = el.get()[0].getBoundingClientRect();
        expect(innerHeight - position.bottom).eq(10);
        expect(position.left).eq(10);
      });
      cy.get(ids.closeByIdBtn).click();
    });

    it('show in bottom right position', () => {
      cy.get(ids.bottomRightRadio).click();
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should(async el => {
        const position = el.get()[0].getBoundingClientRect();
        expect(innerHeight - position.bottom).eq(10);
        expect(innerWidth - position.right).eq(10);
      });
      cy.get(ids.closeByIdBtn).click();
    });

    it('show in bottom middle position', () => {
      cy.get(ids.bottomMiddleRadio).click();
      cy.get(ids.showByIdBtn).click();
      cy.get(ids.toastId).should(async el => {
        const position = el.get()[0].getBoundingClientRect();
        expect(innerHeight - position.bottom).eq(10);
        expect(innerWidth - position.right).gt(10);
        expect(position.left).gt(10);
      });
      cy.get(ids.closeByIdBtn).click();
    });
  });
});
