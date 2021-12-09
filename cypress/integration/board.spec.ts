context("Actions", () => {
  describe("The Signin Page", () => {
    it("successfully signin", () => {
      cy.visit("/");
      cy.wait(5000);
      cy.get("#input-15").click();
      cy.wait(3000);
      cy.get("#input-15").type("herdy123@gmail.com");
      cy.wait(2000);
      cy.get("#input-19").click();
      cy.wait(3000);
      cy.get("#input-19").type("123456");
      cy.wait(3000);
      cy.get(".v-card__actions > :nth-child(1)").click();
      cy.wait(10000);
    });
  });

  describe("Submit Add board", () => {
    it("successfully submit add board", () => {
      cy.get(".v-btn").click();
      cy.wait(3000);
      cy.get("#input-51").type("Test");
      cy.wait(3000);
      cy.get(":nth-child(1) > .v-btn").click({ multiple: true });
      cy.wait(8000);
    });
  });

  describe("Open and Create New List", () => {
    it("successfully open and create new list", () => {
      cy.get(".v-card__title").click();
      cy.wait(20000);
      cy.get(".create-list").click();
      cy.wait(3000);
      cy.get("#input-88").type("Monday");
      cy.wait(3000);
      cy.get(".v-card__actions > :nth-child(3)").click({ multiple: true });
      cy.wait(3000);
      cy.get(".create-list").click();
      cy.wait(3000);
      cy.get("#input-88").type("Tuesday");
      cy.wait(3000);
      cy.get(".v-card__actions > :nth-child(3)").click({ multiple: true });
      cy.wait(3000);
    });

    describe("Add Card", () => {
      it("successfully add card", () => {
        cy.get(":nth-child(1) > .mt-auto").click({ multiple: true });
        cy.wait(3000);
        cy.get("#input-102").type("Task 1");
        cy.wait(3000);
        cy.get(
          ".v-dialog__content--active > .v-dialog > .v-card > .v-card__actions > :nth-child(3)"
        ).click({ multiple: true, force: true });
        cy.wait(3000);
        cy.get(":nth-child(2) > .mt-auto").click({ multiple: true });
        cy.wait(3000);
        cy.get("#input-102").type("Task 2");
        cy.wait(3000);
        cy.get(
          ".v-dialog__content--active > .v-dialog > .v-card > .v-card__actions > :nth-child(3)"
        ).click({ multiple: true, force: true });
        cy.wait(3000);
      });
    });

    describe("Edit Card", () => {
      it("successfully edit card", () => {
        cy.get(":nth-child(1) > .mt-5 > .v-card__text").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
        cy.get("#input-114").type(" Designing");
        cy.wait(3000);
        cy.get(".v-card__actions > :nth-child(4)").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
        cy.get(":nth-child(2) > .mt-5 > .v-card__text").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
        cy.get("#input-114").type(" Coding");
        cy.wait(3000);
        cy.get(".v-card__actions > :nth-child(4)").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
      });
    });

    describe("Delete Card", () => {
      it("successfully delete card", () => {
        cy.get(":nth-child(2) > .mt-5 > .v-card__text").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
        cy.get(".red--text > .v-btn__content").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
        cy.get(":nth-child(1) > .mt-5 > .v-card__text").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
        cy.get(".red--text > .v-btn__content").click({
          multiple: true,
          force: true,
        });
        cy.wait(3000);
      });
    });
  });

  describe("Delete List", () => {
    it("successfully delete list", () => {
      cy.get(":nth-child(2) > .d-flex > .v-icon").click({
        multiple: true,
        force: true,
      });
      cy.wait(3000);
      cy.get(".pr-6 > :nth-child(1) > .d-flex > .v-icon").click({
        multiple: true,
        force: true,
      });
      cy.wait(3000);
      cy.get(".mdi-delete-outline").click({ multiple: true, force: true });
      cy.wait(3000);
    });
  });

  describe("Signout", () => {
    it("successfully signout", () => {
      cy.get(".flex-grow-0 > .v-icon").click({ multiple: true, force: true });
      cy.wait(3000);
      cy.get(":nth-child(3) > a").click({ multiple: true, force: true }).click({
        multiple: true,
        force: true,
      });
      cy.wait(3000);
    });
  });
});

describe("The Signin Page as guest", () => {
  it("successfully signin as guest", () => {
    cy.visit("/");
    cy.wait(5000);
    cy.get(".v-card__actions > :nth-child(2)").click();
    cy.wait(5000);
  });
});
