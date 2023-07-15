import videoPreviews from "./data.js";

const videoContainer = document.getElementsByClassName("video-container")[0];
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
console.log(document.getElementsByClassName("sidebar")[0].innerHTML);
console.log(videoContainer);

// console.log(videoContainer.innerHTML);


console.log("index.js loaded");