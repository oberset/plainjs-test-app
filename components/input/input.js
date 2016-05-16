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
        this.valueId = null;
    }

    setDisabled(flag) {
        let changes = {};

        this.disabledFields.map(field => {
            changes[field] = { disabled: flag };
        });

        this.setData(changes);
    }

    onMount(node) {
        this.ui = UI(node, {
            inputId: '#id'
        });

        this.ui.inputId[0].addEventListener('focus', () => {
            this.setDisabled(true);
        });

        this.ui.inputId[0].addEventListener('blur', () => {
            !this.valueId && this.setDisabled(false);
        });

        this.ui.inputId[0].addEventListener('input', (e) => {
            this.valueId = e.currentTarget.value;
        });
    }

    onUnmount() {
        this.ui = null;
        this.valueId = null;
    }
}

export { Input, template as InputTemplate };