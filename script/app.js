(() => {
    // set up the puzzle pieces and boards
    const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
        puzzlePieces = document.querySelectorAll('.puzzle-image'),
        dropZones = document.querySelectorAll('.drop-zone'),
        gameBoard = document.querySelector(".puzzle-board"),
        piecesBox = document.querySelector('.puzzle-pieces');
    // add event handling here -> how is the user going to use our app?
    // what triggers do we need

    let imageNames = ['topLeft', 'topRight', 'BottomLeft', 'BottomRight'];

    function changeImageSet() {
        // change all the image elements on the page -> draggable image sources,
        imageNames.forEach((piece, index) => {
                puzzlePieces[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
            })
            // let newBackgroundImage = `images/backGround${this.dataset.bgkey}.jpg`; (contenced down to one line)
            //dynamically changes the background image by grabbing the data number using bgkey

        gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
        console.log(dropZones)

        dropZones.forEach((dropZone) => {

            while (dropZone.firstChild) {

                let currentChild = dropZone.removeChild(dropZone.firstChild);
                piecesBox.appendChild(currentChild);
            }
        })

    } // and set the drop zone background

    // debugger;
    function allowDrag(event) {
        console.log('started dragging an image: this one - ', event.target.id);

        event.dataTransfer.setData('draggedImg', this.id);


        //let the drag happen and stor a reference of the ID8 of the element we're dragging
    }

    function allowDragOver(event) {
        event.preventDefault(); //for next week
        console.log('dragged something over me');

    }

    function allowDrop(event) {
        console.log('dropped something on me');
        let droppedImage = event.dataTransfer.getData('draggedImg');
        //if the length of the number of children is 0 append child 
        if (event.currentTarget.children.length === 0) {
            event.target.appendChild(document.querySelector(`#${droppedImage}`));
        }



    }



    // click on the bottom buttons to change the puzzle image we're working with
    puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    // dropZones.forEach(zone => {
    //     zone.addEventListener('dragover', allowDragOver);
    //     zone.addEventListener('drop', allowDrop);
    // });

    //just another way to write ^
    for (let zone of dropZones) {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    }


    //research call, apply and bind
    changeImageSet.call(puzzleButtons[0]); //empulates a click on the first button
})();