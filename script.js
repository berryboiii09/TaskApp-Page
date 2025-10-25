const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.15 });

const hiddenElements = document.querySelectorAll('.animate, .featureBox, .reviewBox, .priceBox');
const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('sidebarBtn');

hiddenElements.forEach(el => el.classList.add('hidden'));
hiddenElements.forEach(el => observer.observe(el));

function openSidebar(){
  sidebar.classList.add('open');
}

function closeSidebar(){
  sidebar.classList.remove('open');
}

function toggleSidebar() {
  if (sidebar.classList.contains('open')) {
    closeSidebar();
    menuButton.classList.remove('active');
  } else {
    openSidebar();
    menuButton.classList.add('active');
  }
}
menuButton.addEventListener('click',toggleSidebar);