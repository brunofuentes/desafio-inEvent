const shortenName = require("./shortenName");

test("string of names v1", () => {
    let name = "Yan Da Silva Fonsecaaaaaaaaaaaaaaa";
    expect(shortenName(name)).toMatch("Yan Da S. F.");
    expect(shortenName(name).length).toBeLessThanOrEqual(13);
});

test("string of names v2", () => {
    let name = "Brunooooooooooooooooooooo Veronese Fuentes";
    expect(shortenName(name)).toMatch("B. V. F.");
    expect(shortenName(name).length).toBeLessThanOrEqual(13);
});

test("string of one single name", () => {
    let name = "Brunooooooooooooooooooooo";
    expect(shortenName(name)).toMatch("Brunooooooooo");
    expect(shortenName(name).length).toBeLessThanOrEqual(13);
});

test("string with multiple names", () => {
    let name = "A B C D E F G H I J K L";
    expect(shortenName(name)).toMatch("A. B. C. D. E");
    expect(shortenName(name).length).toBeLessThanOrEqual(13);
});