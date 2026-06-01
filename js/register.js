const API_URL = "https://tugas-aplikasi-sederhana-c80gfz3my-zafid-affans-projects.vercel.app/api";

async function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById("message").innerText =
            "Register berhasil! Silakan login.";

        // optional: redirect ke login
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    } else {
        document.getElementById("message").innerText =
            data.message || "Register gagal";
    }
}