import { Plain } from 'plainjs';
import UI from 'plainjs/ui';
import template from './loader.html';

class Loader extends Plain {
    constructor() {
        super();

        this.setData({
           loaded: false
        });
    }

    onMount(node) {
        setTimeout(() => {
            this.setData({
                loaded: true
            })
        }, 5000);
    }
}

export { Loader, template as LoaderTemplate }