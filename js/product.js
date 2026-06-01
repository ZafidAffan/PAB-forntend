const API_URL = "https://tugas-aplikasi-sederhana-c80gfz3my-zafid-affans-projects.vercel.app/api";

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

async function loadProducts() {

    const response = await fetch(`${API_URL}/products`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const res = await response.json();

    const products = res.data;

    let html = "";

    products.forEach(product => {
        html += `
            <li>
                ${product.nama} - Rp ${product.harga}
            </li>
        `;
    });

    document.getElementById("productList").innerHTML = html;
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

loadProducts();