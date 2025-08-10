const products = [
  {
    id: 1,
    name: "Script Crimson The Ryujin 1.0",
    image: "./assets/Banner1.jpg",
    desc: "Script dengan tema Ryujin, kekuatan maksimal, aura brutal.",
    status: "Pre-Order",
    price: 25000
  },
  {
    id: 2,
    name: "Script Themis - Assistant 1.0",
    image: "./assets/Banner2.jpg",
    desc: "AI Assistant generasi baru berbasis Themis untuk automasi.",
    status: "Pre-Order",
    price: 28000
  },
  {
    id: 3,
    name: "Custom Script",
    image: "./assets/Bannernjir.png",
    desc: "Script sesuai permintaan pengguna. Bebas request fitur. Harga bisa berubah",
    status: "Available",
    price: 30000
  },
  {
    id: 4,
    name: "Feature Add-ons",
    image: "./assets/Bannernjir.png",
    desc: "Tambahan fitur opsional untuk melengkapi script utama. Hrga bisa berubah",
    status: "Available",
    price: 5000
  },
  {
    id: 5,
    name: "Custom Website",
    image: "./assets/Bannernjir.png",
    desc: "Website sesuai permintaan pengguna. Bebas request. Harga bisa berubah",
    status: "Available",
    price: 30000
  }
];

const paymentNumbers = {
  DANA: "Coming Soon",
  OVO: "Coming Soon",
  GoPay: "Coming Soon",
  Saweria: "https://saweria.co/TuanVinn7"
};

const grid = document.getElementById("product-grid");
const cart = [];

function renderProducts() {
  grid.innerHTML = "";
  products.forEach(p => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <div class="product-header">
        <span class="badge ${p.status === 'Pre-Order' ? 'preorder' : 'available'}">${p.status}</span>
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <p>Rp ${p.price.toLocaleString()}</p>
      <button onclick="buy(${p.id})">Buy</button>
      <button onclick="addCart(${p.id})">Add to Cart</button>
    `;
    grid.appendChild(el);
  });
}

function buy(id) {
  const p = products.find(p => p.id === id);
  document.getElementById("buy-detail").innerHTML = `
    <p><b>${p.name}</b></p>
    <p>${p.desc}</p>
    <p>Harga: Rp ${p.price.toLocaleString()}</p>
  `;
  document.getElementById("buy-overlay").classList.remove("hidden");
  document.getElementById("buy-overlay").dataset.product = JSON.stringify(p);
}

function addCart(id) {
  const p = products.find(p => p.id === id);
  cart.push(p);
  renderCartOverlay();
  showAddToCartNotif();
  updateCartCount();
}

function renderCartOverlay() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = "";

  if (!cart.length) {
    cartList.innerHTML = "<p>Keranjang kosong.</p>";
    cartTotal.textContent = "Rp 0";
    return;
  }

  cart.forEach(p => {
    const item = document.createElement("p");
    item.textContent = `${p.name} - Rp ${p.price.toLocaleString()}`;
    cartList.appendChild(item);
  });

  const total = cart.reduce((sum, p) => sum + p.price, 0);
  cartTotal.textContent = "Rp " + total.toLocaleString();
}

function toggleOverlay(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function checkoutWA(isBuy = false) {
  const metode = (isBuy ? document.getElementById("buy-method") : document.getElementById("checkout-method")).value;
  const nomorWA = "6285172360191";
  const nomor = paymentNumbers[metode] || "-";

  let pesan = "Halo, saya ingin membeli:\n";

  if (isBuy) {
    const p = JSON.parse(document.getElementById("buy-overlay").dataset.product);
    pesan += `• ${p.name} (Rp ${p.price.toLocaleString()})\n`;
    pesan += `Total: Rp ${p.price.toLocaleString()}\n`;
  } else {
    cart.forEach(p => {
      pesan += `• ${p.name} (Rp ${p.price.toLocaleString()})\n`;
    });
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    pesan += `Total: Rp ${total.toLocaleString()}\n`;
  }

  pesan += `Metode pembayaran: ${metode}`;
  if (metode !== "QRIS") {
    pesan += `\nNomor ${metode}: ${nomor}`;
  }

  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}

function checkoutTG(isBuy = false) {
  const metode = (isBuy ? document.getElementById("buy-method") : document.getElementById("checkout-method")).value;
  const nomor = paymentNumbers[metode] || "-";

  let pesan = "Halo, saya ingin membeli:\n";

  if (isBuy) {
    const p = JSON.parse(document.getElementById("buy-overlay").dataset.product);
    pesan += `• ${p.name} (Rp ${p.price.toLocaleString()})\n`;
    pesan += `Total: Rp ${p.price.toLocaleString()}\n`;
  } else {
    cart.forEach(p => {
      pesan += `• ${p.name} (Rp ${p.price.toLocaleString()})\n`;
    });
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    pesan += `Total: Rp ${total.toLocaleString()}\n`;
  }

  pesan += `Metode pembayaran: ${metode}`;
  if (metode !== "QRIS") {
    pesan += `\nNomor ${metode}: ${nomor}`;
  }

  const url = `https://t.me/share/url?url=https://t.me/TuanVinn7&text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}

document.getElementById("cartToggle").onclick = () => toggleOverlay("cart-overlay");
document.getElementById("homeBtn").onclick = () => location.href = "/";
document.getElementById("searchBtn").onclick = () => document.getElementById("search").focus();
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};
document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  grid.innerHTML = "";
  filtered.forEach(p => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <div class="product-header">
        <span class="badge ${p.status === 'Pre-Order' ? 'preorder' : 'available'}">${p.status}</span>
        <img src="${p.image}" alt="${p.name}"/>
      </div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <p>Rp ${p.price.toLocaleString()}</p>
      <button onclick="buy(${p.id})">Buy</button>
      <button onclick="addCart(${p.id})">Add to Cart</button>
    `;
    grid.appendChild(el);
  });
});

function showAddToCartNotif() {
  const notif = document.getElementById("cart-notification");
  notif.classList.add("show");
  notif.classList.remove("hidden");
  setTimeout(() => notif.classList.remove("show"), 2000);
  const sound = document.getElementById("cart-sound");
  sound.currentTime = 0;
  sound.play();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function moveAlya() {
  const alya = document.getElementById("alya");
  const x = Math.random() * (window.innerWidth - 80);
  const y = Math.random() * (window.innerHeight - 80);
  const o = 0.5 + Math.random() * 0.5;
  alya.style.transform = `translate(${x}px, ${y}px)`;
  alya.style.opacity = o;
}
setInterval(moveAlya, 3500);
renderProducts();
