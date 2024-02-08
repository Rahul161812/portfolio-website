const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  console.log("clicked");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.add("open");
  }
});

// onabort("click", ".menubtn-toggle", function (e) {
//   Selection("body").classlist.toggle("menu-btn-active");
//   this.classlist.toggle("bi-list");
//   this.classlist.toggle("bi-x");
// });
