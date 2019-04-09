import DS from 'ember-data';

export default DS.Model.extend({
    description: DS.attr('string'),

    originalPrice: DS.attr('number'),

    price: DS.attr('number'),

    banner: DS.attr('string'),
});
