<template>
  <q-page
    class="column gutter-md background"
    padding>
    <div class="column items-center">
      <br-organization-form v-model="form" />
    </div>
  </q-page>
</template>
<script>
/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import {BrOrganizationForm} from 'bedrock-vue-organization-form';

export default {
  name: 'Home',
  components: {BrOrganizationForm},
  data() {
    return {
      form: {
        legalName: {
          value: ''
        },
        entityType: {
          value: ''
        }
      }
    };
  }
};
</script>
<style>
</style>
