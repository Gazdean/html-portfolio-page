function createAndPositionDiv(id, x, y, width, height, colour) {

    const newDiv = document.createElement('div');

    newDiv.style.position = 'absolute';
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.backgroundColor = colour; 
    newDiv.style.top = `${y}px`; 
    newDiv.style.left = `${x}px`;
    newDiv.id = id;

    const container = document.getElementById('home-card');
    container.appendChild(newDiv);
    let currentHeight = height;
    
    if (newDiv.id === 'laserTrail') {
        let screenWidth = window.innerWidth;
        console.log(screenWidth) 
        let intervalTime = 8
        if (screenWidth < 450) intervalTime = 5
        function laserTrailHeightIncrease () {
            let increaseInHeight = 1.04
            
            if (screenWidth < 450) increaseInHeight = 0.925
            currentHeight += increaseInHeight
            newDiv.style.height = `${currentHeight}px`
            newDiv.style.top = `${y - currentHeight + height}px`;  
        }
        setInterval(laserTrailHeightIncrease, intervalTime)
    }
}

function logGunPosition() {
    const gunDiv = document.getElementById('tank-gun');
    const homeCard = document.getElementById('home-card');

    if (gunDiv && homeCard) {
        const gunRect = gunDiv.getBoundingClientRect();
        const homeCardRect = homeCard.getBoundingClientRect();

        const relativeTop = gunRect.top - homeCardRect.top;
        const relativeLeft = gunRect.left - homeCardRect.left;
        const relativeRight = gunRect.right - homeCardRect.left;

        console.log('Position relative to home-card:');
        console.log(`Top: ${relativeTop}px`);
        console.log(`Left: ${relativeLeft}px`);
        console.log(`Right: ${relativeRight}px`);
        console.log(`Width: ${gunRect.width}px`);
        console.log(`Height: ${gunRect.height}px`);

        createAndPositionDiv('laser', relativeLeft, relativeTop, 2, 5, 'red');
        createAndPositionDiv('laserTrail', relativeLeft, (relativeTop - 2), 3, 4, '#E8E8E8');
    } else {
        console.log('Element not found.');
    }
}

function laserDivExists() {
    console.log('hey')
    const div = document.getElementById('laser')
    console.log('div', div)
    if (div === null) {logGunPosition()}
    else {
        laser.remove()
    }
}

setInterval(laserDivExists, 2300)