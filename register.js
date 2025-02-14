document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent form from reloading the page

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Registration failed: " + errorText);
                return;
            }

            const message = await response.text();
            alert(message);

            if (response.status === 201) {
                window.location.href = "login.html"; // Redirect to login on success
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    });
});
