const API_URL = "https://tugas-aplikasi-sederhana-ba9b6sark-zafid-affans-projects.vercel.app/api";

async function saveProduct() {
    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;

    // 🔥 AMBIL TOKEN
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Token tidak ditemukan, silakan login ulang");
        window.location.href = "login.html";
        return;
    }

    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // 🔥 INI WAJIB
        },
        body: JSON.stringify({
            nama,
            harga: Number(harga)
        })
    });

    const result = await response.json();

    if (response.ok) {
        document.getElementById("message").innerText =
            "Produk berhasil ditambahkan";

        setTimeout(() => {
            window.location.href = "products.html";
        }, 1000);

    } else {
        document.getElementById("message").innerText =
            result.message;
    }
}