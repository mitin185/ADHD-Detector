document.getElementById("nextBtn").addEventListener("click", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  let isAnyChecked = false;

  // Check if at least one checkbox is ticked
  checkboxes.forEach((box) => {
    if (box.checked) {
      isAnyChecked = true;
    }
  });

  // If at least one checkbox is checked, proceed
  if (isAnyChecked) {
    document.getElementById("message").style.display = "block";

    // Simulate moving to the next portal
    setTimeout(() => {
      window.location.href = "cause.html"; // Replace with your next portal's link
    }, 1500);
  } else {
    alert("Please select at least one symptom you are facing before proceeding.");
  }
});
