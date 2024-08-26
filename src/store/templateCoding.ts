import { initValue } from "@/contants/initValue";
import { TemplateCodingType } from "@/types/TemplateCoding";
import { createMapperHooksStore } from "@extremelyjs/store";

const templateCodingStore = createMapperHooksStore<TemplateCodingType,string>(initValue,{withLocalStorage: 'templateCodingStore'});

export const useTemplateCoding = templateCodingStore.useStoreValue;

export const setTemplateCoding = templateCodingStore.setStoreValue;

export const resetTemplteCoding = templateCodingStore.reset;

export const loadTemplateCoding = templateCodingStore.load;