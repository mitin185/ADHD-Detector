// Add event listener to the button
document.getElementById("loginButton").addEventListener("click", function() {
    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;

    // Simple validation
    if (name === "" || phone === "" || age === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Display in console (optional, for testing)
    console.log("Name:", name);
    console.log("Phone Number:", phone);
    console.log("Age:", age);

    // Redirect to another webpage
    window.location.href = "symptom.html"; // Change 'welcome.html' to your desired page
});
