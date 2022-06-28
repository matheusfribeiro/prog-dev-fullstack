

const xhttp = new XMLHttpRequest() 
const $list = document.querySelector('#list')

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
    
        const response = (JSON.parse(this.responseText))

        console.log(response[0])

        response.forEach(item => {
            
            $list.innerHTML += `
                <ul id="list">
                    <li>
                        <h1>${item.title}</h1>
                        <img src="${item.url}" alt="">
                    </li>
                </ul>
            `
            
        })
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()



