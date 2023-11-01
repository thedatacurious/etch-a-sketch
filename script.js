container = document.querySelector("#container")
gridBtn = document.createElement("button");
gridBtn.textContent = "Generate Grid"

document.body.insertBefore(gridBtn,container)

function genGrid(num){
    for (i = 1; i <= num*num; i++){
        const size = Math.round(800/num);
        let div = document.createElement('div');
        div.classList.add('grid')
        div.setAttribute('style', ` flex: 1 1 ${size}px` )
        container.appendChild(div);

    }
}

function removeGrid(){
    container.replaceChildren();
}

genGrid(24);


function changeColor(e){
    let grid = e.target;
    if (grid.classList.contains('grid')){
        grid.classList.add('colored')
    }

}
container.addEventListener('mousemove', changeColor);


gridBtn.addEventListener('click', (e) => {
    const LIMIT = 100;
    let count = prompt('How many squares per side would you like for your canvas? Max: 100')
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