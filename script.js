let isPunjabi = false;
function toggleLanguage() {
  isPunjabi = !isPunjabi;
  if(isPunjabi){
    document.getElementById("title").innerText = "ਜੈਵਿਕ ਤਾਜੀਆਂ ਸਬਜ਼ੀਆਂ";
    document.getElementById("nav-about").innerText = "ਸਾਡੇ ਬਾਰੇ";
    document.getElementById("nav-products").innerText = "ਉਤਪਾਦ";
    document.getElementById("nav-contact").innerText = "ਸੰਪਰਕ";
    document.getElementById("hero-text").innerText = "ਸਾਡੇ ਖੇਤੋਂ ਸਿੱਧਾ ਤੁਹਾਡੀ ਮੇਜ਼ ਤੱਕ";
    document.getElementById("about-title").innerText = "ਸਾਡੇ ਬਾਰੇ";
    document.getElementById("about-text").innerText = "ਸਾਡੇ ਜੈਵਿਕ ਫਾਰਮ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ 🌱। ਅਸੀਂ ਪੰਜਾਬ ਦੇ ਕਿਸਾਨ ਹਾਂ ਜੋ 100% ਕੁਦਰਤੀ, ਬਿਨਾਂ ਕੇਮਿਕਲ ਵਾਲੀਆਂ ਸਬਜ਼ੀਆਂ ਉਗਾਉਂਦੇ ਹਾਂ। ਸਾਡਾ ਮਿਸ਼ਨ ਤੁਹਾਡੇ ਲਈ ਤਾਜਾ, ਸਿਹਤਮੰਦ ਅਤੇ ਟਿਕਾਊ ਭੋਜਨ ਪ੍ਰਦਾਨ ਕਰਨਾ ਹੈ।";
    document.getElementById("products-title").innerText = "ਸਾਡੇ ਤਾਜੇ ਉਤਪਾਦ";
    document.getElementById("tomato-title").innerText = "ਟਮਾਟਰ";
    document.getElementById("tomato-price").innerText = "₹50 / ਕਿ.ਗ੍ਰਾ.";
    document.getElementById("carrot-title").innerText = "ਗਾਜਰ";
    document.getElementById("carrot-price").innerText = "₹40 / ਕਿ.ਗ੍ਰਾ.";
    document.getElementById("spinach-title").innerText = "ਪਾਲਕ";
    document.getElementById("spinach-price").innerText = "₹20 / ਗੁੱਛਾ";
    document.getElementById("cauliflower-title").innerText = "ਗੋਭੀ";
    document.getElementById("cauliflower-price").innerText = "₹60 / ਪੀਸ";
    document.getElementById("contact-title").innerText = "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ";
    document.getElementById("address").innerText = "📍 ਖੇਤ ਦਾ ਪਤਾ: ਬਰਨਾਲ, ਪੰਜਾਬ, ਭਾਰਤ";
    document.getElementById("phone").innerHTML = "📞 ਕਾਲ/ਵਟਸਐਪ: <a href='https://wa.me/916239007589'>+91 62390 07589</a>";
    document.getElementById("email").innerText = "📧 ਈਮੇਲ: devinderjeetece@gmail.com";
    document.getElementById("follow-text").innerText = "ਸਾਨੂੰ ਫਾਲੋ ਕਰੋ";
  } else {
    location.reload();
  }
}
