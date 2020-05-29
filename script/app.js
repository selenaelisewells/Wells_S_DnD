(() => {
    // set up the puzzle pieces and boards
    const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
        gameBoard = document.querySelector(".puzzle-board");

    function changeImageSet() {
        // change all the image elements on the page -> draggable image sources,
        // let newBackgroundImage = `images/backGround${this.dataset.bgkey}.jpg`; (contenced down to one line)
        //dynamically changes the background image by grabbing the data number using bgkey

        gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
        // and set the drop zone background

        // debugger;
    }

    // add event handling here -> how is the user going to use our app?
    // what triggers do we need?

    // click on the bottom buttons to change the puzzle image we're working with
    puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

    //research call, apply and bind
    changeImageSet.call(puzzleButtons[0]); //empulates a click on the first button
})();