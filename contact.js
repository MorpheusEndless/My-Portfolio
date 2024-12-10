document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (!firstName || !lastName || !email || !mobile || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    alert("Your message has been submitted!");
    this.submit(); // Submit the form
  });




