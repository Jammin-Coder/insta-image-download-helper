let removeImageCovorButton = document.getElementById("removeImageCover");

removeImageCovorButton.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removeImageCover
    });
});

function removeImageCover() {
    let class_to_modify = '_aagw'
    window.addEventListener('mousedown', () => {
        const images = document.querySelectorAll('.' + class_to_modify);
        images.forEach(image => {
            image.classList.remove(class_to_modify)
        });
    });
}