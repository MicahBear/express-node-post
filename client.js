fetch('http://localhost:3000/api')
.then(response => response.json())
.then(data => createList(data))
.catch(error=> console.log(error))

function createList (data) {
    let mainContainer = document.getElementById('myData')

    data.forEach(item =>{
        let div = document.createElement('div')
        div.innerHTML = 'Name :'+ item.name
        mainContainer.appendChild(div)
    })
}