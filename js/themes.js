const moonIcon="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z";

const sunIcon="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1";

const themeSwitcher=document.querySelector('#theme-switcher');

const themeSwitcherIcon=document.querySelector('#theme-switcher svg path');

themeSwitcher.addEventListener('click',()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        document.documentElement.classList.remove("dark");
        themeSwitcherIcon.setAttribute('d',moonIcon);
        localStorage.theme='light';
    }else{
        document.documentElement.classList.add("dark");
        themeSwitcherIcon.setAttribute('d',sunIcon);
        localStorage.theme='dark';
    }
})

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeSwitcherIcon.setAttribute('d',sunIcon)
} else {
    document.documentElement.classList.remove('dark');
    themeSwitcherIcon.setAttribute('d',moonIcon);
}
