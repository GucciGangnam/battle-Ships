// imports 
import displayPlayerBoard from "./VIS-Display-boards";
import { displayComputerBoard } from "./VIS-Display-boards";
import displayPageSkeleton from "./VIS-displayPageSkeleton";

function battleShips() {
    const body = document.querySelector('body');
    body.innerHTML = '';    
    displayPageSkeleton();
    const stepsHeader = document.querySelector('.steps-header');
    stepsHeader.textContent = 'Choose a square to attack';
    const rotateButtonDiv = document.querySelector('.rotate-button-div');
    rotateButtonDiv.innerHTML = '';

    displayPlayerBoard();
    
    // Ai place ships on conputer board 
    displayComputerBoard();

    // add event listeners to computers board squares



}
export default battleShips;