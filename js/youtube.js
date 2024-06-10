// Coding video URL
const codingUrl =
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&playlistId=UU0RBTQIYLEQbcahZWkmzeTQ&key=AIzaSyD0IuEC9s5OEKzx2vwF2Fs7OWaYcCiZXPo";

// Gaming video URL
const gamingUrl =
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&playlistId=UU0P4CIgKm9AWCwTFb2kt4ow&key=AIzaSyD0IuEC9s5OEKzx2vwF2Fs7OWaYcCiZXPo";

//前缀
const ytPrefix = "https://www.youtube.com/watch?v=";

const codingContainer = document.querySelector('#coding-container');
const gamingContainer = document.querySelector('#gaming-container');

//加载器
const codingLoader = document.querySelector('#coding-loader');
const gamingLoader = document.querySelector('#gaming-loader');

getDataAndCreateHTML(codingUrl, codingContainer, codingLoader,'https://www.youtube.com/@LearnWithJonVadar/videos');
getDataAndCreateHTML(gamingUrl, gamingContainer, gamingLoader,'https://www.youtube.com/@LearnWithJonVadar/videos');


function getDataAndCreateHTML(url, container, loader,channelURL) {
    fetch(url).then(res => res.json()).then(data => {
        loader.classList.remove('hidden');
        console.log(data);
        data.items.forEach(el => {
            container.innerHTML += `
    <a href="${ytPrefix+el.snippet.resourceId.videoId}" target="_blank" rel="external" class="card overflow-hidden block hover:text-sky-500 hover:ring-sky-500">
        <img src="${el.snippet.thumbnails.maxres.url}" alt="thumbnail">
        <h4 class="font-medium text-lg px-4 py-6">${el.snippet.title}</h4>
    </a>`
        })
        loader.classList.add('hidden');
    }).catch(err=>{
        console.log(err);
        container.parentNode.innerHTML+=`<a href="${channelURL}" class="block mt-4 text-center ring-1 ring-zinc-900 rounded-lg px-6 py-1 dark:ring-zinc-100 hover:ring-sky-500 dark:hover:ring-sky-500 hover:text-sky-500 dark:hover:text-sky-500  ">Content not available,please visit the Youtube page directly.</a>`
    })
}