const Counter = require("./Counter")

// @ponicode
describe("incrementCounter", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "George", "Edmond"], ["Edmond", "Anas", "Jean-Philippe"], ["Michael", "Jean-Philippe", "Jean-Philippe"]]
        inst = new Counter.Counter(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.incrementCounter()
        }
    
        expect(callFunction).not.toThrow()
    })
})
