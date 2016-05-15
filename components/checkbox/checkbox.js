import { Plain } from 'plainjs';
import UI from 'plainjs/ui';
import CheckboxTemplate from './checkbox.html';

class Checkbox extends Plain {

   constructor() {
        super();

        this.setData({
            className: 'checkbox',
            label: 'set checked',
            checked: null
        });
    }

    onMount(node) {
        this.ui = UI(node, {
            button: 'button'
        });

        this.checked = this.getData().checked;

        this.ui.button[0].addEventListener('click', () => {
            this.checked = !this.checked;

            this.setData({
                checked: this.checked,
                label: this.checked ? 'set unchecked' : 'set checked'
            });
        });
    }

    onUnmount() {
        this.ui = null;
    }

}

export { Checkbox, CheckboxTemplate };