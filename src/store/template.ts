import { createMapperHooksStore } from "@extremelyjs/store";

const templateStore = createMapperHooksStore<string>('<root>\n    <Header position="1">\n\n    </Header>\n    <Project position="3">\n        \n    </Project>\n    <Practice position="2">\n\n    </Practice>\n</root>',{withLocalStorage: 'template'});

export const useTemplate = templateStore.useStoreValue;

export const setTemplate = templateStore.setStoreValue;

export const resetTemplate = templateStore.reset;