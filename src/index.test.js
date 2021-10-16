const rewire = require("rewire")
const index = rewire("./index")
const Game = index.__get__("Game")

const calculateWinner = index.__get__("calculateWinner")
// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "George", "Anas"], ["Michael", "Edmond", "Edmond"], ["Edmond", "Michael", "Michael"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("jumpTo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Edmond", "Jean-Philippe"], ["Edmond", "Edmond", "Michael"], ["Anas", "George", "Michael"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.jumpTo(3.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.jumpTo(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.jumpTo(4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.jumpTo(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.jumpTo(20)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.jumpTo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            calculateWinner(["Edmond", "Jean-Philippe", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculateWinner(["Jean-Philippe", "Jean-Philippe", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculateWinner(["Pierre Edouard", "George", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculateWinner(["Anas", "Pierre Edouard", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculateWinner(["Jean-Philippe", "Edmond", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
