document.getElementById("offerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const email = document.getElementById("email").value;
  const zipcode = document.getElementById("zipcode").value;

  // Validate input
  if (!email || !zipcode) {
    alert("Please fill in all fields.");
    return;
  }

  // Submit form (simulate with alert)
  alert(
    `Form submitted successfully!\nEmail: ${email}\nZIP Code: ${zipcode}\nThank you for participating!`
  );

  // Clear form
  document.getElementById("offerForm").reset();
});

