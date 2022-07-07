const Employee = require('../utils/Employee');

test("Can create an Employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name of Employee instance", () => {
    const name = "Dennis";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set ID of Employee instance", () => {
    const expected = 222;
    const e = new Employee("Dennis", expected);
    expect(e.id).toBe(expected);
});

test("Can set email of Employee instance", () => {
    const expected = "testEmail@test.com";
    const e = new Employee("Dennis", 1, expected);
    expect(e.email).toBe(expected);
});

test("Can retrieve name from Employee instance", () => {
    const expected = "Dennis";
    const e = new Employee(expected);
    expect(e.getName()).toBe(expected);
});

test("Can retrieve ID from Employee instance", () => {
    const expected = 222;
    const e = new Employee("Dennis", expected);
    expect(e.getId()).toBe(expected);
});

test("Can retrieve email from Employee instance", () => {
    const expected = "testEmail@test.com";
    const e = new Employee("Dennis", 1, expected);
    expect(e.getEmail()).toBe(expected);
});

test("Can retrieve role from Employee object", () => {
    const expected = "Employee";
    const e = new Employee("Dennis", 1, "testEmail@test.com");
    expect(e.getRole()).toBe(expected);
});