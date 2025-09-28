document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const ticketOutput = document.getElementById("ticketOutput");

  // Reset previous ticket
  ticketOutput.classList.add("hidden");

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const github = document.getElementById("github").value;
  const avatarFile = document.getElementById("avatar").files[0];
  // ✅ Hide everything related to the form
  document.getElementById("formSection").classList.add("hidden");
  // Congrats section
  document.getElementById("ticketNameHighlight").textContent =
    fullName.split(" ")[0];
  document.getElementById("ticketEmailHighlight").textContent = email;

  // Generate random ticket ID
  const ticketId = "ID-" + Math.floor(1000 + Math.random() * 9000);

  // Update ticket fields
  document.getElementById("outName").textContent = fullName;
  document.getElementById("outHandle").textContent = "@" + github;
  document.getElementById("outEmail").textContent = email;
  document.getElementById("ticketCode").textContent = ticketId;

  // Handle avatar upload
  if (avatarFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("outAvatar").src = e.target.result;
    };
    reader.readAsDataURL(avatarFile);
  } else {
    document.getElementById("outAvatar").src = "https://via.placeholder.com/50";
  }
  // Show ticket + congrats
  document.getElementById("ticketCongrats").classList.remove("hidden");
  document.getElementById("ticketOutput").classList.remove("hidden");

  // Show updated ticket
  ticketOutput.classList.remove("hidden");
  // Show ticket + congrats
  document.getElementById("ticketCongrats").classList.remove("hidden");
  document.getElementById("ticketOutput").classList.remove("hidden");

  // Optionally clear the form
  e.target.reset();
});
