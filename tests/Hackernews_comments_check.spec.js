let { test, expect } = require("@playwright/test");

test("Do the entries on Hackernews website have at least 50 comments", async ({page}) => {
    //I stacja w której wszystkie elementy trafiają do jednego koszyka
    await page.goto("https://news.ycombinator.com/");
    let titles = await page.locator('td:nth-child(3) [class="titlelink"]').allTextContents();
    let comments = await page.locator("tr td:last-child td.subtext");

    //II stacja w której następuje połączenie tytułow z liczbą komentarzy i przefiltrowanie tych, które są poniżej limitu (50)
    let underLimit = [];

    for (let i = 0; i < 30; i++) {
        const title = titles[i];
        const commentLocator = await comments.nth(i).locator('a:nth-child(6)').first();
        const commentStrings = await commentLocator.allTextContents();
        const comment = commentStrings[0]
        let count = 0;


        if (comment) {
            const parts = comment.split(" comments")
            count = parseInt(parts[0]);
        }

        let limit = 50;
        if (count < limit) {
            underLimit.push({
                title: title,
                count: count
            });
        }
    }

    // //II stacja w której następuje filtracja elementów poniżej limitu
    // let underLimit = [];
    //
    // for (let comment of comments) {
    //     const parts = comment.split(" comments")
    //     const count = parseInt(parts[0]);
    //
    //
    //     let limit = 50;
    //     if (count < limit) {
    //         underLimit.push(count);
    //     }
    // }
    //
    // //III stacja w której następuje sortowanie od najmniejszej wartości do największej (sortowanie rosnące)
    underLimit.sort(function (a, b)  {
        if (a.count < b.count) {
            return -1
        }
        if (a.count > b.count) {
            return 1
        }
        return 0
    });

    //IV stacja w której sprawdzane jest czy w koszyku są elementy poniżej limitu
    if (underLimit.length > 0) {
      console.log("Znajdują się komentarze poniżej limitu")
      console.log(underLimit);
    }
    expect(underLimit.length).toEqual(0);  //czekuje ze zawartosc koszyka jest rowna 0
    //

});