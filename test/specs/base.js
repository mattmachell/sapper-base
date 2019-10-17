const assert = require('assert')

describe('Homepage works', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:3000')
        assert.strictEqual(browser.getTitle(), 'Test page')
    })
})