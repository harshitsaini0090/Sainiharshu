

      function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
  
  
  
  function openImage(src) {
    const popup = document.getElementById("imagePopup");
    const img = document.getElementById("popupImg");

    img.src = src;
    popup.style.display = "flex";

    // Scroll viewport ke center me popup dikhana
    popup.scrollIntoView({ behavior: "auto", block: "center" });
  }

  function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
  }

  // ESC key to close popup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeImage();
    }
  });
  
  
   
  
  