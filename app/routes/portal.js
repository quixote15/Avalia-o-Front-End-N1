import Route from '@ember/routing/route';

import EmberObject from '@ember/object';
export default Route.extend({

    model(){
        return this.store.findAll('product');
    },

    setupController(controller,model){
        this._super(...arguments);
        let currentProduct = EmberObject.create({
            id: 0,
            description: 'Action figure bombeiro Mario topzeira das galáxias',
            originalPrice: 449,
            price: 149,
            banner: 'https://ae01.alicdn.com/kf/HTB1pdbKa4WYBuNjy1zkq6xGGpXaL.jpg'            
        });
       
        controller.set('defaultProduct', currentProduct);
    }
});
