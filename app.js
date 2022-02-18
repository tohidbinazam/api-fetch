const shop_list = document.querySelector('.shop-list');
const single_modal = document.querySelector('.single-modal');

fetch('https://fakestoreapi.com/products').then(data => data.json()).then(data => {

    shop_list.innerHTML = '';
    data.map((product) => {
        shop_list.innerHTML += `
                <div class="col-xl-3">
                    <div class="card my-4 shadow rounded-3">
                        <img style='cursor:pointer;' data-bs-toggle="modal" data-bs-target='#single-p' onclick="single_product(${product.id})" class="card-img-top p-img" src="${product.image}" alt="">
                        <div class="card-body">
                            <h2>${product.title}</h2>
                            <h4>${product.category}</h4>
                            <h5>Price $${product.price}</h5>
                        </div>
                    </div>
                </div>
        `
    })
})


function single_product(id){

    single_modal.innerHTML = ''

    fetch('https://fakestoreapi.com/products/' + id).then(data => data.json()).then(data => {
      
        single_modal.innerHTML = `
                    <div class="row">
                        <div class="col-xl-6">
                            <img class="w-100" src="${data.image}" alt="">
                        </div>
                        <div class="col-xl-6">
                            <h2>${data.title}</h2>
                            <h4>Category : ${data.category}</h4>
                            <h5>Price $${data.price}</h5>
                            <p>Description : ${data.description}</p>
                        </div>
                    </div>
        `
    })
    
    
}