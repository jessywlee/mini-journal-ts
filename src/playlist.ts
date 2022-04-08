// import Sortable from "sortablejs";

const draggables = document.querySelectorAll('.draggable');
const container = document.querySelector('.playlist-items') as HTMLUListElement;
const youtubeLink = document.querySelector('.link-address') as HTMLInputElement;
const addLinkButton = document.querySelector('.link-add-button');


// Sortable.create(container, {
//     animation: 350
//   })


function addPlaylist() :void {
  const link = youtubeLink.value;
  console.log(link)

}

addLinkButton?.addEventListener('click', () => addPlaylist())

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  })
})

draggables.forEach(draggable => {
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  })
})

// container?.addEventListener('dragover', (e) => {
//   e.preventDefault();
//   const afterElement = dragAfterElement(container, e.clientY)
  
//   const draggable = document.querySelector('.dragging') as HTMLLIElement;
//   if (afterElement == null) {
//     container.appendChild(draggable);
//   } else {
//     container.insertBefore(draggable, afterElement)
//   }
// })


// function dragAfterElement(container: HTMLUListElement, y: number) {
//   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

//   //get closest element
//   return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect();
//     const offset = y - box.top - box.height / 2;
    
//     if (offset < 0 && offset > closest.offset) {
//       return { offset: offset, element: child};
//     } else {
//       return closest;
//     }
//   }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
// }

