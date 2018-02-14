import Vue from 'vue';

/* eslint-disable no-param-reassign */

const highlightTerm = () => {
  Vue.directive('highlight-term', (el, binding) => {
    const term = binding.value || '';
    const escapeRegex = term.replace('/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\^\\$\\|]/g', '\\$&');
    const searchRegexUniqueTokens = new RegExp(`(${escapeRegex})`, 'gi');
    const parts = el.innerText.split(searchRegexUniqueTokens);

    const highlightedText = parts.map(part => (
      part.toLowerCase() === term.toLowerCase() ?
        `<mark>${part}</mark>` :
        part
    )).join('');
    el.innerHTML = `<span>${highlightedText}</span>`;
  });
};

class AppDirectives {
  static setVueConfiguration() {
    highlightTerm();
  }
}

export default AppDirectives;
