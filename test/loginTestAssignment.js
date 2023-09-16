import { Selector } from "testcafe";

fixture`TS-01 Login functionality`
    .page`https://dev.deepthought.education/login`;

test('TC-01 Login with valid credentials', async t => {
    await t.maximizeWindow()
    await t.typeText("#username", 'atishchikhale5@gmail.com')
    await t.typeText("#password", "Atish4528")
    await t.click("#login")
    await t.expect(Selector('h5[class="bold-font mb-4"]').textContent).contains('Welcome to DeepThought')
    await t.click("#dropdownMenuButton")
    await t.click('button[class="btn btn-link"]')
})

test('TC-02 Login with Invalid credentials', async t => {
    await t.maximizeWindow()
    await t.typeText("#username", 'atishchikhale5@gmail.com')
    await t.typeText("#password", "Atish45")
    await t.click("#login")
    await t.expect(Selector(('#login-error-notify > strong')).textContent).contains('Login Unsuccessful')
})