const API_URL = "https://tugas-aplikasi-sederhana-ba9b6sark-zafid-affans-projects.vercel.app/api";

const token = localStorage.getItem("token");

// redirect kalau belum login
if (!token) {
    window.location.href = "login.html";
}

async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result);
            document.getElementById("productList").innerHTML =
                `<tr><td colspan="3">${result.message}</td></tr>`;
            return;
        }

        const products = result.data;

        let html = "";

        products.forEach((product, index) => {
            html += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.nama}</td>
                    <td>Rp ${product.harga}</td>
                </tr>
            `;
        });

        document.getElementById("productList").innerHTML = html;

    } catch (error) {
        console.error("Error:", error);
    }
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

loadProducts();
