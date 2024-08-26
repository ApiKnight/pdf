import { createMapperHooksStore } from "@extremelyjs/store";

const currentKeyStore = createMapperHooksStore<number>(0);

export const useCurrentKey = currentKeyStore.useStoreValue;

export const setCurrentKey = currentKeyStore.setStoreValue;

export const resetCurrentKey = currentKeyStore.reset;