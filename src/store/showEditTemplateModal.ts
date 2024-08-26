import { createMapperHooksStore } from "@extremelyjs/store";

const showEditTemplateModalStore = createMapperHooksStore<boolean>(false);

export const useShowEditTemplateModal = showEditTemplateModalStore.useStoreValue;

export const setShowEditTemplateModal = showEditTemplateModalStore.setStoreValue;

export const resetShowEditTemplateModal = showEditTemplateModalStore.reset;

