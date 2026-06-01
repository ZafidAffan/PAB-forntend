const API_URL = "https://tugas-aplikasi-sederhana-c80gfz3my-zafid-affans-projects.vercel.app/api";

async function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();

    if(data.token){
        localStorage.setItem("token", data.token);
        window.location.href = "products.html";
    }else{
        document.getElementById("message").innerText =
            data.message || "Login gagal";
    }
}