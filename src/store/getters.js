export const saleProducts = (state) => {
    var saleProducts = state.products.map((product) => {
        return {
            name: "**" + product.name + "**",
            price: product.price / 2,
        };
    });
    return saleProducts;
};

export const getUsers = (state) => {
    return state.users;
};
