import { Plain } from 'plainjs';
import UI from 'plainjs/ui';
import template from './input.html';

class Input extends Plain {

   constructor() {
        super();

        this.setData({
            className: 'input',
            id: {
                label: 'ID',
                placeholder: 'input id',
                disabled: null
            },
            'first-name': {
                label: 'First name',
                placeholder: 'input first name',
                disabled: null
            },
            'last-name': {
                label: 'Last name',
                placeholder: 'input last name',
                disabled: null
            }
        });

        this.disabledFields = ['first-name', 'last-name'];
        this.disabled = false;
    }

    updateFields() {
        let changes = {};

        this.disabledFields.map(field => {
            changes[field] = { disabled: this.disabled };
        });

        this.setData(changes);
    }

    onMount(node) {
        this.ui = UI(node, {
            inputId: '#id'
        });

        this.ui.inputId[0].addEventListener('input', (e) => {
            let val = e.currentTarget.value;

            if (val && !this.disabled) {
                this.updateFields(this.disabled = true);
                
            } else if (!val && this.disabled) {
                this.updateFields(this.disabled = false);
            }
        });
    }

    onUnmount() {
        this.ui = null;
        this.disabled = false;
    }
}

export { Input, template as InputTemplate };