document.addEventListener("DOMContentLoaded", () => {
    const othersCheckbox = document.getElementById("othersCheckbox");
    const otherCauseInput = document.getElementById("otherCauseInput");
    const form = document.getElementById("adhdForm");
  
    // Enable/Disable textarea when 'Others' checkbox is clicked
    othersCheckbox.addEventListener("change", () => {
      otherCauseInput.disabled = !othersCheckbox.checked;
      if (!othersCheckbox.checked) {
        otherCauseInput.value = "";
      }
    });
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const selectedCauses = [];
  
      document.querySelectorAll('input[name="cause"]:checked').forEach((checkbox) => {
        selectedCauses.push(checkbox.value);
      });
  
      if (othersCheckbox.checked && otherCauseInput.value.trim() !== "") {
        selectedCauses.push("Others: " + otherCauseInput.value.trim());
      }
  
      if (selectedCauses.length > 0) {
        alert("You have selected: \n" + selectedCauses.join(", "));
        // Simulate moving to the next portal (replace this with actual navigation)
        window.location.href = "info_recorded.html"; // Replace with the actual next page/portal link
      } else {
        alert("Please select at least one cause of ADHD.");
      }
    });
  });
  