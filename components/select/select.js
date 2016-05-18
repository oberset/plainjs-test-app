import { Plain } from 'plainjs';
import UI from 'plainjs/ui';
import template from './select.html';

class Select extends Plain {
    constructor() {
        super();

        this.options = [
            {value: 1, label: 'One'},
            {value: 2, label: 'Two'},
            {value: 3, label: 'Three'},
            {value: 4, label: 'Four'},
            {value: 5, label: 'Five'}
        ];

        this.setData({
            selected: this.options[0].label,
            options: this.options
        });
    }

    onMount(node) {
        this.ui = UI(node, { select: 'select'});

        this.ui.select[0].addEventListener('change', (e) => {
            this.setData({
                selected: this.options[e.currentTarget.selectedIndex].label
            });
        });
    }

    onUnmount() {
        this.ui = null;
    }
}

export { Select, template as SelectTemplate }