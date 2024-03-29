import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product , quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductIndex(state ,product);
            if(index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case Types.DELETE_CART:
            index = findProductIndex(state ,product);
            if(index !== -1) {
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case Types.UPDATE_CART:
            index = findProductIndex(state ,product);
            if(index!== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findProductIndex = (cart,product) => {
    var index = -1;
    if(cart.length > 0) {
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;