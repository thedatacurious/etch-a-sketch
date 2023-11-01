container = document.querySelector("#container")
for (i = 1; i <= 16*16; i++){
    let div = document.createElement('div');
    div.setAttribute('class','grid');
    container.append(div);
}

function changeColor(e){
    let grid = e.target;
    if (grid.classList.contains('grid')){
        grid.classList.add('colored')
        console.log('Done!')
    }

}
container.addEventListener('mousemove', changeColor)