const API_URL = "https://tugas-aplikasi-sederhana-c80gfz3my-zafid-affans-projects.vercel.app/api";

const token = localStorage.getItem("token");

if(!token){
    window.location.href = "login.html";
}

async function loadProducts(){

    const response = await fetch(`${API_URL}/products`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });

    const products = await response.json();

    let html = "";

    products.forEach(product => {
        html += `
            <li>
                ${product.name}
            </li>
        `;
    });

    document.getElementById("productList").innerHTML = html;
}

function logout(){
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

loadProducts();