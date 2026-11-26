// เมนูสำหรับหน้าจอมือถือ
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// เมื่อกดลิงก์เมนู ให้ปิดเมนูบนมือถือ
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ปุ่มกลับขึ้นด้านบน
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 350);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// แสดงปีปัจจุบันในส่วนท้ายเว็บไซต์
document.getElementById("year").textContent = new Date().getFullYear();
