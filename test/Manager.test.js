const Manager = require('../utils/Manager');

test("Can set an Office Number to a Manager instance", () => {
    const expected = "123";
    const e = new Manager("Dennis", 1, "testEmail@test.com", expected);
    expect(e.officeNumber).toBe(expected);
});

test("Can retrieve Office Number a Manager instance", () => {
    const expected = "123";
    const e = new Manager("Dennis", 1, "testEmail@test.com", expected);
    expect(e.getOffice()).toBe(expected);
});

test("Can retrieve role from an Manager instance", () => {
    const expected = "Manager";
    const e = new Manager("Dennis", 1, "testEmail@test.com", "123");
    expect(e.getRole()).toBe(expected);
});