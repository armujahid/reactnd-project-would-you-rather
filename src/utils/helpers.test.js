const helpers = require("./helpers")
// @ponicode
describe("helpers.formatDate", () => {
    test("0", () => {
        let callFunction = () => {
            helpers.formatDate({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            helpers.formatDate({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            helpers.formatDate({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            helpers.formatDate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
