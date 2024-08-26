启动: `pnpm dev`

缺点: `showEditProject.ts`,`showEditPractice.ts`这两个store设计的不合理，不应该使用`boolean`+公用的`key`来判断，应该使用独立的`number`。

需要的技术栈： Reack Hooks, TypeScript, Antd, Vite, **@extremelyjs/store**

@extremelyjs/store: https://github.com/extremelyjs/store