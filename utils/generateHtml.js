const path = require("path");
const fs = require("fs");

// get the paths of the card html elements for the team roles
const employeeCardPath = path.resolve(__dirname, "../assets");

// Function for passing in an array of team members and displaying their info on page
const displayTeam = employees => {
  const teamPage = [];

  teamPage.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => displayManager(manager))
  );
  teamPage.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => displayEngineer(engineer))
  );
  teamPage.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => displayIntern(intern))
  );
// join the html elements together to form the team page
  return displayMain(teamPage.join(""));

};

// function for reading the Manager html card and replacing the placeholders with the user inputs
const displayManager = manager => {
  let memberCard = fs.readFileSync(path.resolve(employeeCardPath, "manager.html"), "utf8");
  memberCard = addMemberCard(memberCard, "name", manager.getName());
  memberCard = addMemberCard(memberCard, "role", manager.getRole());
  memberCard = addMemberCard(memberCard, "email", manager.getEmail());
  memberCard = addMemberCard(memberCard, "id", manager.getId());
  memberCard = addMemberCard(memberCard, "officeNumber", manager.getOffice());
  return memberCard;
};

// function for reading the Engineer html card and replacing the placeholders with the user inputs
const displayEngineer = engineer => {
  let memberCard = fs.readFileSync(path.resolve(employeeCardPath, "engineer.html"), "utf8");
  memberCard = addMemberCard(memberCard, "name", engineer.getName());
  memberCard = addMemberCard(memberCard, "role", engineer.getRole());
  memberCard = addMemberCard(memberCard, "email", engineer.getEmail());
  memberCard = addMemberCard(memberCard, "id", engineer.getId());
  memberCard = addMemberCard(memberCard, "github", engineer.getGithub());
  return memberCard;
};

// function for reading the Intern html card and replacing the placeholders with the user inputs
const displayIntern = intern => {
  let memberCard = fs.readFileSync(path.resolve(employeeCardPath, "intern.html"), "utf8");
  memberCard = addMemberCard(memberCard, "name", intern.getName());
  memberCard = addMemberCard(memberCard, "role", intern.getRole());
  memberCard = addMemberCard(memberCard, "email", intern.getEmail());
  memberCard = addMemberCard(memberCard, "id", intern.getId());
  memberCard = addMemberCard(memberCard, "school", intern.getSchool());
  return memberCard;
};

// Function for adding the team member cards in the 'team' placeholder section of the main html file
const displayMain = html => {
  const template = fs.readFileSync(path.resolve(employeeCardPath, "main.html"), "utf8");
  return addMemberCard(template, "team", html);
};

// Function for replacing the team member card information in the html file
const addMemberCard = (template, placeholder, value) => {
// Use RegExp object to search for the matching placeholders within the html file to be replaced
  const pattern = new RegExp("{ " + placeholder + " }", "gm");
  return template.replace(pattern, value); // replace the specified pattern { } in the html file with the user value
};

module.exports = displayTeam;
