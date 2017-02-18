import _ from 'lodash';
function component () {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello ', 'welcome to use webpack2'], '');
  return element;
}

document.body.appendChild(component());
