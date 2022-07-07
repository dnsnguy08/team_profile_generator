const Intern = require('../utils/Intern');

test("Can set a school to an Intern instance", () => {
    const expected = "SFSU";
    const e = new Intern("Dennis", 1, "testEmail@test.com", expected);
    expect(e.school).toBe(expected);
});

test("Can retrieve school from an Intern instance", () => {
    const expected = "SFSU";
    const e = new Intern("Dennis", 1, "testEmail@test.com", expected);
    expect(e.getSchool()).toBe(expected);
});

test("Can retrieve role from an Intern instance", () => {
    const expected = "Intern";
    const e = new Intern("Dennis", 1, "testEmail@test.com", "123");
    expect(e.getRole()).toBe(expected);
});