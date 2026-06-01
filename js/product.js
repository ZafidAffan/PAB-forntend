const API_URL = "https://tugas-aplikasi-sederhana-c80gfz3my-zafid-affans-projects.vercel.app/api";

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

        // DEBUG kalau error
        if (!response.ok) {
            console.log(result);
            document.getElementById("productList").innerHTML =
                `<li>${result.message}</li>`;
            return;
        }

        const products = result.data;

        let html = "";

        products.forEach((product) => {
            html += `
                <li>
                    ${product.nama} - Rp ${product.harga}
                </li>
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