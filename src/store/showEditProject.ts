import { createMapperHooksStore } from "@extremelyjs/store";

const showEditProjectStore = createMapperHooksStore<boolean>(false);

export const useShowEditProject = showEditProjectStore.useStoreValue;

export const setShowEditProject = showEditProjectStore.setStoreValue;

export const resetShowEditProject = showEditProjectStore.reset;