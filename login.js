document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error response from server:", errorText);
            alert("Login failed: " + errorText);
            return;
        }

        const data = await response.json();
        if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Login failed: Invalid response from server.");
            console.error("Unexpected response data:", data);
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("Login failed: " + error.message);
    }
});



