import _ from 'lodash';

function component() {
    const element = document.createElement('div');
Element.innerHTML = _.join(['Hello', 'webpack'], '');
Element.classList.add('hello');
return element
}

document.body.appendChild(component());