# ten locator wyciąga wszystkie artykuły na stronie (np. 30 sztuk)
articles = locator('bla bla')

articles_with_comments = []

for article in articles:
title = article.locator('a').textContent() # "some funny article"
comments = article.locator('bla bla 2') # "50 comments"
comments_parsed = parseNoOfComments(comments) # 50

articles_with_comments.push([title, comments_parsed])

print(articles_with_comments) # should print [["some funny article", 50], ...]

# sort the collection

# check if all articles have more than 50 comments

# if not fail with message containing articles with less than 50 commnets





let idx = 0
idx++
let d = title
articles[idx]


// / <reference types="cypress" />

context("check comments", function () {

    it("get table length", function () {
        cy.visit("https://news.ycombinator.com");
        cy.get("#hnmain")
            .find("tr.athing")
            .then(function (tableLength) {
                cy.log(tableLength.length);
                cy.wrap(Number(tableLength.length)).as("tableLength");
            });
    });

    it("check comments", function () {
        var fail = [];

        for (let i = 0; i < this.tableLength; i++) {
            cy.log("WWW: ", fail);
            cy.log(fail.length);

            cy.get("tr.athing")
                .eq(i)
                .next()
                .find("td.subtext")
                .find("a")
                .contains("hide")
                .siblings()
                .then(function (input) {
                    if (input.text().includes("comment")) {
                        cy.get("tr.athing")
                            .eq(i)
                            .next()
                            .find("td.subtext")
                            .find("a")
                            .contains("comment")
                            .then(function (input) {
                                const commentsNumber1 = input.text().split(/\s/g);

                                cy.wrap(Number(commentsNumber1[0])).as("numberToCheck");
                                if (Number(commentsNumber1[0]) >= 50) {
                                    cy.log("OK");
                                } else {
                                    cy.get("tr.athing")
                                        .eq(i)
                                        .then(function (input) {
                                            const headerToCheck = input.text();
                                            cy.wrap(headerToCheck).as("headerToCheck");
                                            var obj = {
                                                com: Number(commentsNumber1[0]),
                                                header: headerToCheck,
                                            };
                                            cy.wrap(obj).as("obj");
                                            fail.push(this.obj);
                                        });
                                }
                            });
                    } else {
                        cy.wrap(0).as("numberToCheck");
                        cy.get("tr.athing")
                            .eq(i)
                            .then(function (input) {
                                const headerToCheck = input.text();
                                cy.wrap(headerToCheck).as("headerToCheck");

                                var obj = {
                                    com: Number(this.numberToCheck),
                                    header: headerToCheck,
                                };
                                cy.wrap(obj).as("obj");
                                fail.push(this.obj);
                            });
                    }

                    cy.log(
                        fail.sort(function (a, b) {
                            return b.com - a.com;
                        })
                    );
                });
        }
    });
});