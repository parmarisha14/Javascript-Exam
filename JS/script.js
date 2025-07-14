let items = JSON.parse(localStorage.getItem('items')) || [];
let inputs = document.querySelectorAll("input");
let user = {};
let displays = document.querySelector('table tbody');
let editIndex = null;


inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        const { name, value } = e.target;
        user = { ...user, [name]: value };
    });
});


const handleSubmit = () => {
    if (editIndex === null) {
        items.push({ ...user, id: Date.now() });
    } else {
        items = items.map((value) => {
            if (value.id === editIndex) {
                return { ...user, id: editIndex };
            } else {
                return value;
            }
        });
        editIndex = null;
    }

    localStorage.setItem('items', JSON.stringify(items));
    document.querySelector('form').reset();
    user = {};
    displayProductList();
};


const displayProductList = () => {
    displays.innerHTML = '';
    items.forEach((user, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.pnm}</td>
            <td>${user.price}</td>
            <td>${user.category}</td>

            <td>
                <img src="${user.image}" alt="Image" width="150" height="100";" />
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteProduct(${user.id})">Delete</button>
                <button class="btn btn-warning" onclick="editProduct(${user.id})">Edit</button>
            </td>
        `;
        displays.appendChild(row);
    });
};


const editProduct = (id) => {
    const productSelected = items.find(r => r.id === id);
    if (productSelected) {
        inputs.forEach((input) => {
            input.value = productSelected[input.name] || '';
        });
        user = { ...productSelected };
        editIndex = id;
    }
};


const deleteProduct = (id) => {
    items = items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(items));
    displayProductList();
};


displayProductList();
