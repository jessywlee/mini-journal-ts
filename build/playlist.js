"use strict";
const draggables = document.querySelectorAll('.draggable');
const container = document.querySelector('.playlist-items');
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
container === null || container === void 0 ? void 0 : container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = dragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        container.appendChild(draggable);
    }
    else {
        container.insertBefore(draggable, afterElement);
    }
});
function dragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    //get closest element
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        }
        else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}
//# sourceMappingURL=playlist.js.map