import Vue from 'vue';

import {
  Vuetify,
  VApp,
  VGrid,
  VToolbar,
  VBtn,
  VIcon,
  VNavigationDrawer,
  VList,
  VDivider,
  VCard,
  VChip,
  VTextField,
  VSelect,
  VExpansionPanel,
  VProgressLinear,
} from 'vuetify';

require('vuetify/src/stylus/app.styl');

class AppUIFramework {
  static setVueConfiguration() {
    Vue.use(Vuetify, {
      components: {
        VApp,
        VGrid,
        VToolbar,
        VBtn,
        VIcon,
        VNavigationDrawer,
        VList,
        VDivider,
        VCard,
        VChip,
        VTextField,
        VSelect,
        VExpansionPanel,
        VProgressLinear,
      },
    });
  }
}

export default AppUIFramework;
