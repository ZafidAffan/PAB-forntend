const API_URL = "https://tugas-aplikasi-sederhana-8f3uw6cv4-zafid-affans-projects.vercel.app/api";

async function saveProduct() {
    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;
    const message = document.getElementById("message");
    const loading = document.getElementById("loading");

    const token = localStorage.getItem("token");

    if (!token) {
        alert("Token tidak ditemukan, silakan login ulang");
        window.location.href = "login.html";
        return;
    }

    // 🔥 TAMPILKAN LOADING
    loading.style.display = "flex";

    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                nama,
                harga: Number(harga)
            })
        });

        const result = await response.json();

        // 🔥 HILANGKAN LOADING
        loading.style.display = "none";

        if (response.ok) {
            message.style.color = "green";
            message.innerText = "Produk berhasil ditambahkan";

            setTimeout(() => {
                window.location.href = "products.html";
            }, 1000);

        } else {
            message.style.color = "red";
            message.innerText = result.message;
        }

    } catch (error) {
        loading.style.display = "none";
        message.style.color = "red";
        message.innerText = "Terjadi kesalahan!";
    }
}
