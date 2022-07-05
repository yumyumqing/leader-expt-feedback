describe("User ID page", () => {
  it('finds the content "User ID"', () => {
    cy.visit("http://localhost:3000/");
    cy.contains("User ID");
  });
});

describe("Insufficient User ID length", () => {
  it("inputs a 9-digit User ID and cannot go forward", () => {
    cy.get("input").type("012345678");
    cy.contains("Enter a 10-digit User ID");
    cy.contains("Start").should("be.disabled");
  });
});

describe("Correct User ID", () => {
  it("inputs a 10-digit User ID and can go forward", () => {
    cy.get("button").eq(0).click(); // reset button
    cy.get("input").type("User012345");
    cy.contains("Valid User ID");
    cy.contains("Start").should("not.be.disabled");
  });
});

describe("Navigate to Survey page", () => {
  it('navigates to Survey page and find "User ID"', () => {
    cy.contains("Start").click();
    cy.contains("User012345");
  });
});

describe("Select year-of-birth", () => {
  it("selects a year-of-birth and cannot go forward yet", () => {
    cy.get("button").eq(0).click();
    cy.contains("1992").click();
    cy.contains("1992");
    cy.contains("Submit").should("be.disabled");
  });
});

describe("Input employment status", () => {
  it("inputs employment status and cannot go forward yet", () => {
    cy.get("textarea").eq(0).type("User012345 Employment Status");
    cy.contains("Submit").should("be.disabled");
  });
});

describe("Input experiment feedback", () => {
  it("inputs experiment feedback and can go forward now", () => {
    cy.get("textarea").eq(1).type("User012345 Experiment Feedback");
    cy.contains("Submit").should("not.be.disabled");
  });
});

describe("Navigate to thank you page", () => {
  it('navigates to thank you page and find "Thank you"', () => {
    cy.contains("Submit").click();
    cy.contains("Thank you");
  });
});

export {};
