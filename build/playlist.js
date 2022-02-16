import Sortable from 'sortablejs';
const container = document.getElementById('playlist-items');
const youtubeLink = document.querySelector('.link-address');
const addLinkButton = document.querySelector('.link-add-button');
Sortable.create(container, {
    animation: 350
});
function addPlaylist() {
    const link = youtubeLink.value;
    console.log(link);
}
addLinkButton === null || addLinkButton === void 0 ? void 0 : addLinkButton.addEventListener('click', () => addPlaylist());
//# sourceMappingURL=playlist.js.map