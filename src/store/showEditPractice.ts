import { createMapperHooksStore } from "@extremelyjs/store";

const showEditPracticeStore = createMapperHooksStore<boolean>(false);

export const useShowEditPractice = showEditPracticeStore.useStoreValue;

export const setShowEditPractice = showEditPracticeStore.setStoreValue;

export const resetShowEditPractice = showEditPracticeStore.reset;