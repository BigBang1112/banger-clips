let dotNetObjectReference;
let videoFile;

const handleFileChange = (event) => {
    videoFile = event.target.files[0];
    const media = URL.createObjectURL(videoFile);
    dotNetObjectReference.invokeMethodAsync('SetVideoInfoAsync', videoFile.name, videoFile.type, media);
};

export function addHandlers(dotNetRef) {
    dotNetObjectReference = dotNetRef;

    const video_upload = document.getElementById("video-upload");
    video_upload.addEventListener("change", handleFileChange);
}

export function removeHandlers() {
    const video_upload = document.getElementById("video-upload");
    video_upload.removeEventListener("change", handleFileChange);
}

export function getCurrentTime(video) {
    return video.currentTime;
}

export async function getVideoBuffer() {
    return new Uint8Array(await videoFile.arrayBuffer());
}