import { PlainComponent as Pjs } from 'plainjs';
import { Checkbox, CheckboxTemplate } from './components/checkbox/checkbox';
import { Input, InputTemplate } from './components/input/input';
import { Loader, LoaderTemplate } from './components/loader/loader';
import { Select, SelectTemplate } from './components/select/select';

console.time('render');
Pjs.render(
    '<h1 content="hello"></h1>',
    { hello: 'Hello World!!!' },
    document.querySelector('.hello')
);
console.timeEnd('render');

console.time('render');
Pjs.render(CheckboxTemplate, Checkbox, document.querySelector('.container-checkbox'));
console.timeEnd('render');

console.time('render');
Pjs.render(InputTemplate, Input, document.querySelector('.container-input'));
console.timeEnd('render');

console.time('render');
Pjs.render(LoaderTemplate, Loader, document.querySelector('.container-loader'));
console.timeEnd('render');

console.time('render');
Pjs.render(SelectTemplate, Select, document.querySelector('.container-select'));
console.timeEnd('render');