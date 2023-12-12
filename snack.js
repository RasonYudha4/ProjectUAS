// Sample data for featured items and menu
const featuredItemsData = [
    { name: 'Special Burger', image: 'burger.jpg' },
    { name: 'Signature Pizza', image: 'pizza.jpg' },
    // Add more featured items as needed
];

const menuItemsData = [
    { name: 'Pasta Carbonara', price: '$12.99' },
    { name: 'Margherita Pizza', price: '$10.99' },
    // Add more menu items as needed
];

// Function to render featured items
function renderFeaturedItems() {
    const featuredItemsContainer = document.querySelector('.featured-items');

    featuredItemsData.forEach(item => {
        const featuredItem = document.createElement('div');
        featuredItem.innerHTML = `<img src="${item.image}" alt="${item.name}">
                                   <p>${item.name}</p>`;
        featuredItemsContainer.appendChild(featuredItem);
    });
}

// Function to render menu items
function renderMenuItems() {
    const menuItemsContainer = document.querySelector('.menu-items');

    menuItemsData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<p>${item.name}</p>
                              <p>${item.price}</p>`;
        menuItemsContainer.appendChild(menuItem);
    });
}

// Call the rendering functions
renderFeaturedItems();
renderMenuItems();
