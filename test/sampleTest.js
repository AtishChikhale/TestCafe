// Absolute fixture
import { Selector } from "testcafe";

fixture`Test structure`
    .page`https://devexpress.github.io/testcafe/example`;

test('test one', async testController => {
    await testController
        .typeText("#developer-name", 'John')
        .click("#submit-button")
        .expect(Selector("#article-header").innerText).contains('Thank you, John!')
})