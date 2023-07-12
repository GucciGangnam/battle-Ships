//imports 



function displayPageSkeleton() {
    // create sreps header
    const stepsHeader = document.createElement('div');
    stepsHeader.classList.add('steps-header');
    document.body.appendChild(stepsHeader);
    
    //insert rotate button 
    const rotateButtonDiv = document.createElement('div');
    rotateButtonDiv.classList.add('rotate-button-div');
    document.body.appendChild(rotateButtonDiv);
    const rotateButton = document.createElement('button');
    rotateButton.classList.add('rotate-button');
    rotateButton.textContent = 'button';
    rotateButtonDiv.appendChild(rotateButton);
    
    // create game container 
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    document.body.appendChild(gameContainer);
    
    }

    export default displayPageSkeleton;