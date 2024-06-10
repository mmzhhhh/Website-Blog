const navigation = document.querySelector('#navigation');
const navBackdrop = document.querySelector('#nav-backdrop');
const navOpener = document.querySelector('#nav-opener');
const mobileNavContainer = document.querySelector('#mobile-nav-container');
const navCloser = document.querySelector('#nav-closer');
const mobileNavItems=document.querySelectorAll('#mobile-nav-container a');



navOpener.addEventListener('click', () => {
    mobileNavContainer.classList.remove('opacity-0','invisible');
    navBackdrop.classList.remove('opacity-0','invisible');
})

navCloser.addEventListener('click',()=>{
    mobileNavCloser();
})

function mobileNavCloser() {
    mobileNavContainer.classList.add('opacity-0','invisible');
    navBackdrop.classList.add('opacity-0','invisible');
}

//点击外面隐藏
document.addEventListener('click',(e)=>{
    if(!mobileNavContainer.contains(e.target)&&e.target!=navOpener){
        mobileNavCloser();
    }
})

mobileNavItems.forEach(item=>{
    item.addEventListener('click',()=>{
        mobileNavCloser();
    })
})

let lastScrollTop=0;
window.addEventListener('scroll',()=>{
    const scrollTop=window.scrollY||document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop&&window.scrollY>70){
        navigation.classList.replace('top-0','-top-24');
    }else{
        navigation.classList.replace('-top-24','top-0');
    }
    lastScrollTop=scrollTop;
})

