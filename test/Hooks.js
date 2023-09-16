import { Selector } from "testcafe";

fixture`Test structure two`
    .page`https://devexpress.github.io/testcafe/example`
    .before(async t => {
        console.log("This is before block")
    })
    .beforeEach(async t => {
        console.log("This is before each block")
    })
    .after(async t => {
        console.log("This is after block")
    })
    .afterEach(async t => {
        console.log("This is after each block")
    })

test('test one', async testController => {
        console.log("test case one")
})

test('test two',async t => {
        console.log("test case two")
})

test('test three',async t => {
    console.log("third case test")
})