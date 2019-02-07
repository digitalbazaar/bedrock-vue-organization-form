/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
import Vue from 'vue';
import {BrOrganizationForm} from 'bedrock-vue-organization-form';

// helper function that mounts and returns the rendered text
function render(propsData) {
  const Constructor = Vue.extend(BrOrganizationForm);
  return new Constructor({propsData}).$mount();
}

describe('BrOrganizationForm', () => {
  it('should check something on the rendered element', async () => {
    // TODO: specify propsData
    const vm = render({});
    should.exist(vm);
    should.exist(vm.$el);
    // TODO: $vm.el.something
  });
});
