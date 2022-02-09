import { PersonnelModel } from "./personnel";

export function createPersonnelStore(items) {
  return new Ext.data.Store({
    data: {
      items
    },

    model: PersonnelModel,

    proxy: {
      type: 'memory',
      reader: {
        type: 'json',
        rootProperty: 'items'
      }
    }
  })
};