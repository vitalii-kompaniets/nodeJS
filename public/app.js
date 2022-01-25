document.addEventListener('click', event=>{
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(()=>{
            event.target.closest('li').remove()
        })
    }

    if (event.target.dataset.type === 'edit') {
        const id = event.target.dataset.id
        const newTitle = prompt('Введите новое название', event.target.dataset.title)
        if (event.target.dataset.id === id) {
            console.log(newTitle)
            edit(newTitle).then(()=> {

            event.target.dataset.title = newTitle
        })
        }
    }
})

async function remove(id){
    await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(newTitle){
    await fetch('/', {
        method: 'PUT',
        body: newTitle
    })
}