const WHATSAPP = '916239007589';
const PRODUCTS = [{"id": "potato", "pa": "ਆਲੂ", "en": "Potato", "price1": 40, "price2": 70, "img": "images/potato.jpg"}, {"id": "onion", "pa": "ਪਿਆਜ਼", "en": "Onion", "price1": 35, "price2": 60, "img": "images/onion.jpg"}, {"id": "tomato", "pa": "ਟਮਾਟਰ", "en": "Tomato", "price1": 50, "price2": 90, "img": "images/tomato.jpg"}, {"id": "cauliflower", "pa": "ਫੂਲਗੋਭੀ", "en": "Cauliflower", "price1": 45, "price2": 80, "img": "images/cauliflower.jpg"}, {"id": "okra", "pa": "ਭਿੰਡੀ", "en": "Okra", "price1": 60, "price2": 110, "img": "images/okra.jpg"}, {"id": "brinjal", "pa": "ਬੈੰਗਣ", "en": "Brinjal", "price1": 40, "price2": 70, "img": "images/brinjal.jpg"}, {"id": "carrot", "pa": "ਗਾਜਰ", "en": "Carrot", "price1": 50, "price2": 95, "img": "images/carrot.jpg"}, {"id": "radish", "pa": "ਮੂਲੀ", "en": "Radish", "price1": 30, "price2": 55, "img": "images/radish.jpg"}, {"id": "capsicum", "pa": "ਸ਼ਿਮਲਾ ਮਿਰਚ", "en": "Capsicum", "price1": 80, "price2": 150, "img": "images/capsicum.jpg"}, {"id": "peas", "pa": "ਮਟਰ", "en": "Peas", "price1": 70, "price2": 130, "img": "images/peas.jpg"}, {"id": "ginger", "pa": "ਅਦਰਕ", "en": "Ginger", "price1": 120, "price2": 220, "img": "images/ginger.jpg"}, {"id": "garlic", "pa": "ਲਸਣ", "en": "Garlic", "price1": 150, "price2": 280, "img": "images/garlic.jpg"}, {"id": "apple", "pa": "ਸੇਬ", "en": "Apple", "price1": 100, "price2": 180, "img": "images/apple.jpg"}, {"id": "banana", "pa": "ਕੇਲਾ", "en": "Banana", "price1": 50, "price2": 90, "img": "images/banana.jpg"}, {"id": "pomegranate", "pa": "ਅਨਾਰ", "en": "Pomegranate", "price1": 150, "price2": 280, "img": "images/pomegranate.jpg"}, {"id": "mango", "pa": "ਅੰਬ", "en": "Mango", "price1": 120, "price2": 220, "img": "images/mango.jpg"}, {"id": "orange", "pa": "ਸੰਤਰਾ", "en": "Orange", "price1": 80, "price2": 150, "img": "images/orange.jpg"}];
let lang = 'pa'; // default Punjabi
let cart = JSON.parse(localStorage.getItem('cart_v3')) || [];

function fmtINR(n){ return '₹' + n; }

function renderProducts(){
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  PRODUCTS.forEach((p, idx) => {
    const title = (lang==='en') ? p.en : p.pa + ' (' + p.en + ')';
    const btn1 = (lang==='en') ? 'Add 1kg' : '1 ਕਿਲੋ ਸ਼ਾਮਲ ਕਰੋ';
    const btn2 = (lang==='en') ? 'Add 2kg' : '2 ਕਿਲੋ ਸ਼ਾਮਲ ਕਰੋ';
    const card = document.createElement('div');
    card.className = 'product';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.en}">
      <h3>${title}</h3>
      <p class="small">1 kg: ${fmtINR(p.price1)} • 2 kg: ${fmtINR(p.price2)}</p>
      <div>
        <button class="btn" onclick="addToCart(${idx},1)">${btn1}</button>
        <button class="btn" onclick="addToCart(${idx},2)">${btn2}</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function addToCart(idx, kg){
  const p = PRODUCTS[idx];
  const price = (kg===1) ? p.price1 : p.price2;
  cart.push({id:p.id,name_en:p.en,name_pa:p.pa,kg:kg,price:price});
  localStorage.setItem('cart_v3', JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  const container = document.getElementById('cart-contents');
  container.innerHTML = '';
  if(cart.length===0){
    container.innerHTML = `<p class="small">${lang==='en' ? 'Cart is empty' : 'ਕਾਰਟ ਖਾਲੀ ਹੈ'}</p>`;
    document.getElementById('cart-total').innerText = '₹0';
    return;
  }
  const ul = document.createElement('ul');
  let total = 0;
  cart.forEach((c, i) => {
    total += c.price;
    const li = document.createElement('li');
    li.innerText = `${c.name_pa} (${c.name_en}) - ${c.kg} kg - ₹${c.price}`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
  document.getElementById('cart-total').innerText = total;
}

function placeOrder(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  if(!name || !phone || !address){ alert(lang==='en' ? 'Please fill name, phone and address' : 'ਕਿਰਪਾ ਕਰਕੇ ਨਾਮ, ਫ਼ੋਨ ਅਤੇ ਪਤਾ ਭਰੋ'); return; }
  if(cart.length===0){ alert(lang==='en' ? 'Cart is empty' : 'ਕਾਰਟ ਖਾਲੀ ਹੈ'); return; }
  let msg = (lang==='en' ? 'New order from website\n' : 'ਨਵਾਂ ਆਰਡਰ ਵੈੱਬਸਾਈਟ ਤੋਂ\n');
  msg += (lang==='en' ? 'Name: ' : 'ਨਾਮ: ') + name + '\n';
  msg += (lang==='en' ? 'Phone: ' : 'ਫ਼ੋਨ: ') + phone + '\n';
  msg += (lang==='en' ? 'Address: ' : 'ਪਤਾ: ') + address + '\n\n';
  msg += (lang==='en' ? 'Items:\n' : 'ਸਮਾਨ:\n');
  cart.forEach(c => { msg += c.name_pa + ' (' + c.name_en + ') - ' + c.kg + ' kg - ₹' + c.price + '\n'; });
  msg += (lang==='en' ? 'Total: ' : 'ਕੁੱਲ: ') + document.getElementById('cart-total').innerText;
  const wa = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
  window.open(wa, '_blank');
  cart = [];
  localStorage.setItem('cart_v3', JSON.stringify(cart));
  renderCart();
  document.getElementById('checkout-form').reset();
}

function setLang(newLang){
  lang = newLang;
  document.getElementById('site-title-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('site-title-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('hero-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('hero-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('sub-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('sub-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('products-title-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('products-title-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('cart-title-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('cart-title-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('checkout-title-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('checkout-title-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('label-name-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('label-name-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('label-phone-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('label-phone-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('label-address-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('label-address-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('place-order-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('place-order-pa').style.display = lang==='pa' ? '' : 'none';
  document.getElementById('footer-en').style.display = lang==='en' ? '' : 'none';
  document.getElementById('footer-pa').style.display = lang==='pa' ? '' : 'none';
  renderProducts();
  renderCart();
}

document.addEventListener('DOMContentLoaded', ()=> {
  renderProducts();
  renderCart();
  document.getElementById('checkout-form').addEventListener('submit', placeOrder);
  const ls = document.getElementById('lang-switch');
  ls.addEventListener('click', ()=>{
    setLang(lang==='en' ? 'pa' : 'en');
    ls.innerText = lang==='en' ? 'ਪੰਜਾਬੀ' : 'EN';
  });
  setLang('pa'); // default to Punjabi
});
