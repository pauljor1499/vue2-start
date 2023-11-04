export const reducePrice = (state, payload) => {
    state.products.forEach((product) => {
        product.price -= payload;
    });
};

export const addUser = (state, payload) => {
    state.users.push(payload);
};
