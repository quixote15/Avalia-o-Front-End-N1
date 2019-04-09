import Controller from '@ember/controller';
import {alias,filter} from '@ember/object/computed'
export default Controller.extend({

    products: alias('model'),

    defaultProduct: null,

    cart: [],

    cartItems: alias('cart.length'),


    actions:{
        addProductToCart(product){
            this.get('cart').pushObject(product);
        }
    }
});
