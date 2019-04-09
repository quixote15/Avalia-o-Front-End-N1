import Controller from '@ember/controller';
import {alias,filter} from '@ember/object/computed'
export default Controller.extend({

    products: alias('model'),

    defaultProduct: null,

    cart: [],

    cartItems: alias('cart.length'),

    openModal: false,

    actions:{
        addProductToCart(product){
            this.set('openModal', true);
            this.get('cart').pushObject(product);
            
        }
    }
});
