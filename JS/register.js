function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("All fields must be filled out");
      return false;
  }

  // add more complex validation logic here if needed

  return true;
}