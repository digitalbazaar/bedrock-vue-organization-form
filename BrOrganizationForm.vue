<template>
  <div class="fit">
    <div class="q-mt-md">
      <q-field :error="$v.legalName.$error">
        <q-input
          v-model="legalName.value"
          :float-label="legalName.label"
          class="q-pa-sm q-mt-md"
          @blur="$v.legalName.$touch"
          @keyup="$v.legalName.$touch" />
      </q-field>
    </div>
    <!-- <div class="col-xs-12">
      <q-field :error="$v.logo.$error">
        <q-select
          v-model="logo.value"
          :float-label="logo.label"
          filter
          :options="entityLogos"
          class="q-pa-sm q-mt-md"
          @blur="$v.logo.$touch"
          @keyup="$v.logo.$touch" />
      </q-field>
    </div> -->
    <div class="col-xs-12">
      <q-field :error="$v.entityType.$error">
        <q-select
          v-model="entityType.value"
          :float-label="entityType.label"
          filter
          :options="entityTypes"
          class="q-pa-sm q-mt-md"
          @blur="$v.entityType.$touch"
          @keyup="$v.entityType.$touch" />
      </q-field>
    </div>
    <div class="col-xs-12">
      <slot />
    </div>
  </div>
</template>

<script>
/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import {minLength, required} from 'vuelidate/lib/validators';
import entityTypes from './entityTypes';

export default {
  name: 'BrOrganizationForm',
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  validations: {
    legalName: {
      value: {
        minLength: minLength(1),
        required
      }
    },
    logo: {
      value: {
        minLength: minLength(1)
      }
    },
    entityType: {
      value: {
        minLength: minLength(1),
        required
      }
    }
  },
  data() {
    return {
      entityTypes
    };
  },
  computed: {
    legalName() {
      return this.value.legalName;
    },
    logo() {
      return this.value.logo;
    },
    entityType() {
      return this.value.entityType;
    },
    valid() {
      return !this.$v.$invalid;
    }
  },
  created() {
    this.setup();
  },
  methods: {
    setup() {
      const updatedLabels = _applyDefaultLabels({
        data: this.value,
        labels: {
          legalName: 'Legal Name',
          logo: 'Entity Logo',
          entityType: 'Entity Type'
        }});
      this.$emit('input', updatedLabels);
    }
  }
};

// TODO: Move to bedrock-web-forms
function isString(str) {
  return str && typeof str === 'string';
}

function _applyDefaultLabels({data, labels}) {
  return Object.keys(data).reduce((acc, key) => {
    acc[key] = isString(data[key].label) ? data[key] :
      {
        ...data[key],
        label: labels[key]
      };
    return acc;
  }, {});
}

</script>
<style>
</style>
