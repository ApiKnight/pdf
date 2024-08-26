import { createMapperHooksStore } from "@extremelyjs/store";

const showEditHeaderStore = createMapperHooksStore<boolean>(false);

export const useShowEditHeader = showEditHeaderStore.useStoreValue;

export const setShowEditHeader = showEditHeaderStore.setStoreValue;

export const resetShowEditHeader = showEditHeaderStore.reset;