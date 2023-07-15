const videoPreviews = [
    {
        id: 1,
        thumbnail: "./images/thumbnails/thumbnail-1.webp",
        videoTime: "14:20",
        channelPicture: "./images/channel-pictures/channel-1.jpeg",      
        videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY&pp=ygUxdGFsa2luZyB0ZWNoIGFuZCBhaSB3aXRoIGdvb2dsZSBjZW8gc3VuZGFyIHBpY2hhaQ%3D%3D",
        videoTitle: "TalkingTech and AI with Google CEO Sundar Pichai!",
        videoAuthor: "Marques Brownlee",
        videoStats: "3.4M views • 1 month ago"
    },
    {
        id: 2,
        thumbnail: "./images/thumbnails/thumbnail-2.webp",
        videoTime: "14:20",
        channelPicture: "./images/channel-pictures/channel-2.jpeg",
        videoLink: "https://www.youtube.com/watch?v=mP0RAo9SKZk&pp=ygUdVHJ5IE5vdCBUbyBMYXVnaCBDaGFsbGVuZ2UgIzk%3D",
        videoTitle: "Try Not To Laugh Challenge #9",
        videoAuthor: "Markiplier",
        videoStats: "19M views • 4 years ago"
    },
    {
        id: 3,
        thumbnail: "./images/thumbnails/thumbnail-3.webp",
        videoTime: "14:20",
        channelPicture: "./images/channel-pictures/channel-3.jpeg",
        videoLink: "https://www.youtube.com/watch?v=FgjPQQeTh1w&pp=ygUrY3JhenkgdGlrdG9rIHRha2VuIG1vbWVudHMgYmVmb3JlIGRpc2FzdGVyIA%3D%3D",
        videoTitle: "Crazy Tik Toks Taken Moments Before Disaster",
        videoAuthor: "SSSniperWolf",
        videoStats: "12M views • 1 year ago"
    },
    {
        id: 4,
        thumbnail: "./images/thumbnails/thumbnail-4.webp",
        videoTime: "14:20",
        channelPicture: "./images/channel-pictures/channel-4.jpeg",
        videoLink: "https://www.youtube.com/watch?v=094y1Z2wpJg&pp=ygUqVGhlIHNpbXBsZXN0IE1hdGggUHJvYmxlbSBObyBPbmUgQ2FuIFNvbHZl",
        videoTitle: "The simplest Math Problem No One Can Solve",
        videoAuthor: "Veritasium",
        videoStats: "3.4M views • 2 year ago"
    },
    {
        id: 5,
        thumbnail: "./images/thumbnails/thumbnail-5.webp",
        videoTime: "14:20",
        channelPicture: "./images/channel-pictures/channel-5.jpeg",
        videoLink: "https://www.youtube.com/watch?v=yCQN096CwWM&pp=ygU4S2FkYW5lJ3MgQWxnb3JpdGhtIChNYXhpbXVtIFN1YmFycmF5IFByb2JsZW0pIHR1c2hhciByb3k%3D",
        videoTitle: "Kadane's Algorithm (Maximum Subarray Problem)",
        videoAuthor: "Tushar Roy",
        videoStats: "1.4M views • 3 years ago"
    },
    {
        id: 6,
        thumbnail: "./images/thumbnails/thumbnail-6.webp",
        videoTime: "7:00",
        channelPicture: "./images/channel-pictures/channel-6.jpeg",
        videoLink: "https://www.youtube.com/watch?v=yXWw0_UfSFg&pp=ygUxQW55dGhpbmcgWW91IENhbiBGaXQgSW4gVGhlIENpcmNsZSBJ4oCZbGwgUGF5IEZvcg%3D%3D",
        videoTitle: "Anything You Can Fit In The Circle I’ll Pay For",
        videoAuthor: "MrBeast",
        videoStats: "89M views • 3 years ago"
    }
]

const videoContainer = document.getElementsByClassName("video-container");
videoContainer.innerHTML = "";
for (const videoPreview of videoPreviews) {
  videoContainer.innerHTML += `
  <a href="${videoPreview.videoLink}">
    <div class="video-preview">
      <div class="thumbnail-row"> 
        <img class="thumbnail" src="${videoPreview.thumbnail}" alt="">
        <div class="video-time">${videoPreview.videoTime}</div> 
      </div>

      <div class="video-info-grid"> 
        <div class="channel-picture">
          <img class="profile-picture" src="${videoPreview.channelPicture}" alt="">
        </div>
        <div class="video-info">
          <p class="video-title">
            ${videoPreview.videoTitle}
          </p>
          <p class="video-author">
            ${videoPreview.videoAuthor}
          </p>
          <p class="video-stats">
            ${videoPreview.videoStats}
          </p>
        </div>
      </div>
    </div>
  </a>
  `;
}

// reload the page
console.log(document.querySelector("#video-container"));
console.log(document.getElementsByClassName("sidebar").innerHTML);
console.log(videoContainer);

// console.log(videoContainer.innerHTML);


console.log("index.js loaded");