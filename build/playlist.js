"use strict";
const draggables = document.querySelectorAll('.draggable');
const container = document.querySelector('.playlist-items');
const youtubeLink = document.querySelector('.link-address');
const addLinkButton = document.querySelector('.link-add-button');
function addPlaylist() {
    const link = youtubeLink.value;
    console.log(link);
}
addLinkButton === null || addLinkButton === void 0 ? void 0 : addLinkButton.addEventListener('click', () => addPlaylist());
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });
});
draggables.forEach(draggable => {
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});
//# sourceMappingURL=playlist.js.map