const enhancer = require('./enhancer.js');

describe("enhancement tests", () => {
    let item1, item2, item3, item4, item5;

    beforeEach(() => {
        item1 = {
            name: "Frostmorne",
            durability: 5,
            enhancement: 1
        };
        item2 = {
            name: "Timmy's Pea Shooter",
            durability: 50,
            enhancement: 10
        };
        item3 = {
            name: "Facemask",
            durability: 30,
            enhancement: 12
        };
        item4 = {
            name: "Chestguard",
            durability: 100,
            enhancement: 20
        };
        item5 = {
            name: "Inferno",
            durability: 0,
            enhancement: 0
        }
    })

    //Repairs

    it("enhancer", () => {
        expect(item1).toEqual(item1)
        expect(item1.name).toBe("Frostmorne")
        // expect(enhancer.repair(item1).toHaveProperty("name"))
        // expect(enhancer.repair(item1).toHaveProperty("durability"))
        // expect(enhancer.repair(item1).toHaveProperty("enhancement"))
        expect(enhancer.repair(item1).durability).toEqual(100)
    })
    it("enhancer", () => {
        expect(item2).toEqual(item2)
        expect(item2.name).toBe("Timmy's Pea Shooter")
        // expect(enhancer.repair(item2).toHaveProperty("name"))
        // expect(enhancer.repair(item2).toHaveProperty("durability"))
        // expect(enhancer.repair(item2).toHaveProperty("enhancement"))
        expect(enhancer.repair(item2).durability).toEqual(100)
    })

    //Success

    it("takes a new item", () => {
        const itemRepaired = enhancer.success(item1);
        expect(itemRepaired).not.toBe(item1)
    })

    it("does not change durability", () => {
        let dura= item1.durability
        expect(enhancer.success(item1).durability).toBeLessThanOrEqual(dura)
    })

    it("increases enhancement", () => {
        const newItem = enhancer.get(item1)
        const enhancedItem = enhancer.success(newItem)
        const origEnhancement = newItem.enhancement

        if(newItem.enhancement === 20) {
            expect(enhancedItem.enhancement).toEqual(origEnhancement)
        }
        expect(enhancedItem.enhancement).toEqual(origEnhancement + 1)
    })

    //Fails

    it("gives an objects name", () => {
        expect(enhancer.fail(item3)).toHaveProperty("name")
    })

    it("returns new item", () => {
        const repairItem = enhancer.fail(item4)
        expect(repairItem).not.toBe(item4)
    })

    it("decreases dura and enhancement", () => {
        if(item5.enhancement < 15) {
            expect(enhancer.fail(item5).durability).toEqual(item5.durability - 5);
        }else if (item5.enhancement >= 15 && item5.enhancement < 17) {
            expect(enhancer.fail(item5).durability).toEqual(item5.durability - 10)
        }else {
            expect(enhancer.fail(item5).durability).toEqual(item5.durability - 1)
        }
    })
})