import { defineSchema } from '../../shared/utils';

const sourceField = defineSchema({
  type: 'object',
  required: [],
  nullable: true,
  properties: {
    globalVars: {
      type: 'object',
      nullable: true,
      required: [],
      additionalProperties: true,
    },
  },
});

export default sourceField;
