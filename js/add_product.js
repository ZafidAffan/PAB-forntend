const API_URL = "https://tugas-aplikasi-sederhana-c80gfz3my-zafid-affans-projects.vercel.app/api";

const token = localStorage.getItem("token");

async function saveProduct(){

    const name = document.getElementById("name").value;

    const response = await fetch(`${API_URL}/products`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
            name
        })
    });

    if(response.ok){
        alert("Produk berhasil ditambahkan");
        window.location.href = "products.html";
    }
}