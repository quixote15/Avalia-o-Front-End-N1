import Component from '@ember/component';
import { observer} from '@ember/object';
export default Component.extend({
    idModal: 'modal-success',

    open: false,

    modalObserser: observer('open', function(){
        this.send('toggleModal');
    }),

    actions:{
        toggleModal(){
            let idModal = this.get('idModal');
            if(this.get('open')){
                $('.modal').modal({ showClose: false  })
            }else{
                $.modal.close();
            }
        }
    }
});
