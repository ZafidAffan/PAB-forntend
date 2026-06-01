const API_URL = "https://tugas-aplikasi-sederhana-ba9b6sark-zafid-affans-projects.vercel.app/api";

async function saveProduct() {
    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;

    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nama,
            harga
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