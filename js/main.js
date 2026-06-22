// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Contact Form using Web3Forms
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btnText = document.getElementById("btnText");
    const btnLoader = document.getElementById("btnLoader");
    const successMsg = document.getElementById("successMsg");
    const errorMsg = document.getElementById("errorMsg");

    btnText.style.display = "none";
    btnLoader.style.display = "inline";
    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    const formData = {
      access_key: "0c232a38-6948-4397-9ceb-d870c00ab57d",
      name: document.getElementById("userName").value,
      email: document.getElementById("userEmail").value,
      phone: document.getElementById("userPhone").value,
      service: document.getElementById("userService").value,
      message: document.getElementById("userMessage").value,
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      btnText.style.display = "inline";
      btnLoader.style.display = "none";
      if (data.success) {
        successMsg.style.display = "block";
        form.reset();
      } else {
        errorMsg.style.display = "block";
        console.log("Error:", data);
      }
    })
    .catch((error) => {
      btnText.style.display = "inline";
      btnLoader.style.display = "none";
      errorMsg.style.display = "block";
      console.log("Error:", error);
    });
  });
}