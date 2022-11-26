var darkMode = false;

// default to system setting
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	darkMode = true;
}if (localStorage.getItem('theme') === 'light') {
	darkMode = false;
}else if (localStorage.getItem('theme') === 'dark') {
	darkMode = true;
}if (darkMode) {
	document.body.classList.toggle('dark');
}document.addEventListener('DOMContentLoaded', () => {
document.getElementById('dark').addEventListener('click', () => {
document.body.classList.toggle('dark');
localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
});
