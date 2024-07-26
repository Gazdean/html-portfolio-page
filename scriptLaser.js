function createLaser(elementId, x, y, width, height) {

    // create laserContainer
    const laserContainer = document.createElement('div');
    laserContainer.id = elementId;
    laserContainer.className = 'laserContainer';
    // laser container styles
    laserContainer.style.position = 'absolute';
    laserContainer.style.width = `${width}px`;
    laserContainer.style.height = `${height}px`;
    laserContainer.style.backgroundColor = '#E8E8E8'; 
    laserContainer.style.top = `${y}px`; 
    laserContainer.style.left = `${x}px`;
   
    //  create laser
    const laser = document.createElement('div');
    laser.className = 'laser'
    //laser styles
    laser.style.position = 'absolute';
    laser.style.top = '0px'
    laser.style.width = '2px';
    laser.style.height = '6px';
    laser.style.backgroundColor = 'red';
    
    // add laserContainer to home-card
    const container = document.getElementById('home-card');
    container.appendChild(laserContainer);
    // add laser to laserContainer
    laserContainer.appendChild(laser);

    // increse height of laserContainer to create destruction trail
    let laserContainerCurrentHeight = height;
    
    function laserTrailHeightIncrease () {
        let increaseInHeight = 1.04

        if (laserContainerCurrentHeight < 380) {
            laserContainerCurrentHeight += increaseInHeight
            laserContainer.style.height = `${laserContainerCurrentHeight}px`
            laserContainer.style.top = `${y - laserContainerCurrentHeight + height}px`;  
        }
    }
        setInterval(laserTrailHeightIncrease, 5)    
}

let counter = 1

// find gun position to create laser
function logGunPosition() {
    const gunDiv = document.getElementById('tank-gun');
    const homeCard = document.getElementById('home-card');

    if (gunDiv && homeCard) {
        const gunRect = gunDiv.getBoundingClientRect();
        const homeCardRect = homeCard.getBoundingClientRect();
        const relativeTop = gunRect.top - homeCardRect.top;
        const relativeLeft = gunRect.left - homeCardRect.left;
        const relativeRight = gunRect.right - homeCardRect.left;
        
        function createElementCall(num){
            createLaser(`laserContainer${num}`, relativeLeft, relativeTop-4, 2, 5);
            counter ++
        }
        createElementCall(counter)
    } else {
        console.log('Element not found.');
    }
}

// if laser divs are above 100 in total remove all
function removeLasersOverAmount(num) {
    if(document.querySelectorAll('.laserContainer').length > num) {
        document.querySelectorAll('.laserContainer').forEach(element => {
            element.remove()
        });
    }
}

function removeLasers() {
    document.querySelectorAll('.laserContainer').forEach(element => {
        element.remove()
    })
}

function setUpLasers() {
    removeLasersOverAmount(1000)
    logGunPosition()
}

// reset if screen size changes
window.addEventListener('resize', () => {
    document.querySelectorAll('.laserContainer').forEach(element => {
        element.remove()
    });
});

function activateGameControls() {
    const shootButton = document.getElementById('shootLaser')
    const resetButton = document.getElementById('reset')
    resetButton.disabled === true ? resetButton.disabled = false : resetButton.disabled= true
    shootButton.disabled === true ? shootButton.disabled = false : shootButton.disabled= true
    const gameControlArrow = document.getElementById("gameControlArrow")
    shootButton.disabled === true ? gameControlArrow.className = "fa-solid fa-angle-down": gameControlArrow.className = "fa-solid fa-angle-up"
    const gameControls = document.getElementById("gameControls")
    shootButton.disabled === false ? gameControls.className = "gameControlsMoveDown": gameControls.className = "gameControlsMoveUp"
}

document.getElementById('shootLaser').addEventListener('click', setUpLasers);
document.getElementById('reset').addEventListener('click', removeLasers);
document.getElementById('gameControlArrow').addEventListener('click', activateGameControls);