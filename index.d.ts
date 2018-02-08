import Vue, {PluginFunction, PluginObject} from 'vue';
import {MedusaInstance} from 'medusa-lib';

declare module 'vue/types/vue' {

  interface Vue {
    medusa: MedusaInstance;
  }

  namespace Vue {
    const medusa: MedusaInstance;
  }

}

declare class VueMedusa {
  static install: PluginFunction<MedusaInstance>;
}

export = VueMedusa;
