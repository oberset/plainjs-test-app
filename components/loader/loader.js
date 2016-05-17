import { Plain } from 'plainjs';
import UI from 'plainjs/ui';
import template from './loader.html';

class Loader extends Plain {
    constructor() {
        super();

        this.setData({
            status: 0
        });
    }

    onMount(node) {
        this.ui = UI(node, {
           button: 'button'
        });

        this.ui.button[0].addEventListener('click', (e) => {
            if (this.getData().status < 1) {
                this.setData({ status: 1 });

                setTimeout(() => {
                    this.setData({ status: 2 });
                }, 2500);
            }
        });
    }

    onUnmount() {
        this.ui = null;
    }
}

export { Loader, template as LoaderTemplate }