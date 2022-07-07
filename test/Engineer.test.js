const Engineer = require('../utils/Engineer');

test("Can set a Github account to an Engineer instance", () => {
    const expected = "dnsnguy";
    const e = new Engineer("Dennis", 1, "testEmail@test.com", expected);
    expect(e.github).toBe(expected);
});

test("Can retrieve Github account from an Engineer instance", () => {
    const expected = "dnsnguy";
    const e = new Engineer("Dennis", 1, "testEmail@test.com", expected);
    expect(e.getGithub()).toBe(expected);
});

test("Can retrieve role from an Engineer instance", () => {
    const expected = "Engineer";
    const e = new Engineer("Dennis", 1, "testEmail@test.com", "dnsnguy");
    expect(e.getRole()).toBe(expected);
});