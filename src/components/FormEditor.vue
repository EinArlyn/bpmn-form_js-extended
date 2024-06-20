<template>
  <div id="form-editor" />
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import { FormEditor } from '@bpmn-io/form-js';
import { RangeField } from '@/custom/components/range';
import { RangePropertiesProvider } from '@/custom/properties/range';

const formEditorRef = ref(null);
const schema = ref({
  schemaVersion: 4,
  exporter: {
    name: 'form-js',
    version: '0.1.0',
  },
  type: 'default',
  components: [],
});

onMounted(async () => {
  try {
    const additionalModules = [
        {
          __init__: ['rangeRenderer', 'rangePropertiesProvider'],
          rangeRenderer: ['type', RangeField],
          rangePropertiesProvider: ['type', RangePropertiesProvider]
        }
      ];

    formEditorRef.value = new FormEditor({
      container: document.querySelector('#form-editor'),
      additionalModules,
    });
    await formEditorRef.value.importSchema(schema.value);
  } catch (error) {
    console.error(error.message, error.stack);
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
