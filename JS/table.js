function createElement(...teglar){
    let store = [];
    for(let teg of teglar){
       let createdTeg = document.createElement(teg);
       store.push(createdTeg);
    }
    return store;
}


async function fetchProductsJSON() {
    const response = await fetch('http://localhost:3000/api/posts');
    const products = await response.json();
    return products;
  }
  
  fetchProductsJSON().then(products => {
    let tbody = document.querySelector("#tbody");
    console.log(products);

    for (let post of products) {
        let [tr, td1, td2, td3, td4, td6, img, i] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'img', 'i');
        td1.textContent = post.id;
        td2.textContent = post.title;
        td3.textContent = post.content;
        
        img.className = "img";
        img.src = `http://localhost:3000/${post.image}`;
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.objectFit = "cover";

        i.className += 'fa fa-trash text-danger';
        i.style.cursor = 'pointer';
        i.style.fontSize = '25px';
        i.style.textAlign = 'center';

        i.addEventListener('click', () => {
            fetch(`http://localhost:3000/api/posts/${post.id}`, {
                method: "DELETE"
            }).then(res => res.json())
                .then(info => alert("Ma'lumot o'chirildi"))
        });

        td4.append(img)
        td6.append(i);
        tr.append(td1, td2, td3, td4, td6);
        tbody.appendChild(tr);
    };

  })
