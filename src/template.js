
function template(team) {

    function createManagerCard(manager) {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header manager">
                <h5 class="card-title">Manager</h5>
              </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:${manager.getName()}</li>
              <li class="list-group-item">Id Number:${manager.getId()}</li>
              <li class="list-group-item">Phone Number: ${manager.getOfficeNumber()}</li>
            </ul>
            <div class="card-body">
              <a href="mailto:${manager.getEmail()}" class="card-link">Email: ${manager.getEmail()}</a>
            </div>
          </div>
        `;
    }

    function createEngineerCard(engineer) {
        return `
        
        <div class="card" style="width: 18rem;">
        <div class="card-header engineer">
            <h5 class="card-title">Engineer</h5>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${engineer.getName()}</li>
          <li class="list-group-item">Id Number: ${engineer.getId()}</li>
        </ul>
        <div class="card-body">
          <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="card-link">Github: ${engineer.getGithub()}</a><br>
          <a href="mailto:${engineer.getEmail()}" class="card-link">Email: ${engineer.getEmail()}</a>
        </div>
      </div>
        `
    }

    function createInternCard(intern) {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header intern">
                <h5 class="card-title">Intern</h5>
              </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:${intern.getName()}</li>
              <li class="list-group-item">Id Number:${intern.getId()}</li>
              <li class="list-group-item">School name: ${intern.getSchool()}</li>
            </ul>
            <div class="card-body">
              <a href="mailto:${intern.getEmail()}" class="card-link">Email: ${intern.getEmail()}</a> 
            </div>
          </div>    
        `
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManagerCard(manager)));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineerCard(engineer)));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createInternCard(intern)));

    return html.join('');
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Members</title>
</head>

<body>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Team-Members</a>
        </div>
    </nav>

    <main>
     ${template(team)}
    </main>
</body>

</html>
`
}