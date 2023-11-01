container = document.querySelector("#container")
gridBtn = document.createElement("button");
gridBtn.textContent = "Generate Grid"

document.body.insertBefore(gridBtn,container)

function genGrid(num){
    for (i = 1; i <= num*num; i++){
        const size = Math.round(800/num);
        let div = document.createElement('div');
        div.classList.add('grid')
        div.setAttribute('style', `flex: 1 1 ${size}px` )
        container.appendChild(div);

    }
}

function removeGrid(){
    container.replaceChildren();
}

genGrid(24);

function genRandomValue(max){
    return Math.floor(Math.random()*max);
}

let interactionCount = 0;

function changeColor(e){
    let grid = e.target;
    interactionCount++;
    if (grid.classList.contains('grid')){
        grid.classList.add('colored')
        const h = genRandomValue(360);
        const s = genRandomValue(100);
        // make the grid darker by 10% each time an interaction oocurs
        const l = Math.max(100-interactionCount*10, 0);
        grid.style.setProperty("background",`hsl(${h} ${s}% ${l}%)` )
    }

}
container.addEventListener('mouseover', changeColor);


gridBtn.addEventListener('click', () => {
    const LIMIT = 100;
    let count = prompt('How many squares per side would you like for your canvas? Max: 100', 20)
    if (count <= LIMIT){
        removeGrid();
        genGrid(count);
    }

    else if (count === 0){
        count = prompt("Please enter at least a value of 1.")
    }
    else {
        count = prompt('Your value is too high! Please enter again.')
    }
}
)