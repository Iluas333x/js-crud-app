function add (salam){
    return `<div class="task-item">
                    <div class="task-checkbox"></div>
                    <p class="task-text">${salam}</p>
                    <div class="task-actions">
                        <button class="action-btn edit-btn" onclick="update(this)" >
                            <span class="edit-icon"></span>
                        </button>
                        <button class="delate1" onclick="delete1(this)">
                            <span class="delete-icon"></span>
                        </button>
                    </div>`
}
function addtask(){
    const input = document.querySelector('.task-input')
const textinput  = input.value

if(textinput == ''){
    alert('enter input')
}else{var gettask = document.querySelector('.tasks-list')
gettask.innerHTML +=  add(input.value)
} 
}
function delete1(target) {
target.parentElement.parentElement.remove()
 
}

function update(target){

const ilyass =  target.parentElement.previousElementSibling.innerText
target.parentElement.previousElementSibling.innerHTML = `<input type="text" onblur="save(this)" class ="update" value ="${ilyass}"/>`

}
function save(target){
    target.parentElement.innerHTML =  `<p class="task-text">${target.value}</p>`
}