const sidebar = document.querySelector(".sidebar");
const tops = document.querySelector(".topk");
const Btn = document.querySelector(".js-btn");
const siteHeader = document.querySelector(".site-header");

Btn.addEventListener("click", sidebarOpen)

function sidebarOpen() {
  sidebar.classList.toggle("show")
}



window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    if (scrollValue > 200) {
        siteHeader.classList.add("shrink");
    }
    if (scrollValue > 50) {
        tops.style.bottom = "30px";
    } else if (scrollValue <= 0) {
        tops.style.bottom = "-40px";
        siteHeader.classList.remove("shrink");
    }
});
