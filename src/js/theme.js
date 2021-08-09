import refs from './refs';

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const switchButton = document.querySelector('#theme-switch-toggle');
const savedTheme = localStorage.getItem('theme');
const lightTheme = () => {
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    refs.theme.textContent = "light theme";
};
const darkTheme = () => {
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    refs.theme.textContent = "dark theme";
};
const loadPage = () => {
    if (savedTheme === null) {
        lightTheme();
    } else if (savedTheme === Theme.LIGHT) {
        lightTheme();
    } else if (savedTheme === "dark-theme") {
        darkTheme();
        switchButton.setAttribute("checked", true);
    }
};
switchButton.addEventListener('change', () => {
    if (document.body.className === Theme.LIGHT) {
        darkTheme();
    }
    else lightTheme();
});
loadPage();