// Social Media clone.
// Sign-in and Mini-feed.


// Array asking for/verifying login information.
  var database = [
  {
    username: "kumlaude",
    password: "face11password",
  }
  ];


// User input - username:
var userNamePrompt = prompt("Username:");

// User input - password:
var passwordPrompt = prompt("Password:");


// SignIn Function:
function signIn(user, pass) {
  if (user === database[0].username &&
      pass === database[0].password) {
        console.log(newsFeed);
      } else {
        alert("Unable to log-in. Please enter username and password.");
      }
}

// Sign-in verification:
signIn(userNamePrompt, passwordPrompt);


// Individual feed after login/verification.
  var newsFeed = [
    {
      username: "Picasso",
      timeline: "Free Art Show!"
    },
    {
      username: "Jimmy",
      timeline: "Open Gym tonight at 6:00pm at Gene Friend Recreation Center."
    }
  ]
