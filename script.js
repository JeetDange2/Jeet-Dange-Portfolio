const toggleButton = document.getElementById('toggleSidebar');
const sidebarWrapper = document.getElementById('sidebar');
const sidebarPanel = document.querySelector('.sidebar_open');

toggleButton.addEventListener('click', () => {
    sidebarWrapper.classList.toggle('active'); // show/hide overlay
    sidebarPanel.classList.toggle('active');   // slide in/out panel
});

sidebarWrapper.addEventListener('click', (e) => {
    if (e.target === sidebarWrapper) {
        sidebarWrapper.classList.remove('active');
        sidebarPanel.classList.remove('active');
    }
});

const closeButton = document.getElementById('closeSidebar');

closeButton.addEventListener('click', () => {
  sidebarWrapper.classList.remove('active');
  sidebarPanel.classList.remove('active');
});
