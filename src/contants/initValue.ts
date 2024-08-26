import { TemplateCodingType } from "@/types/TemplateCoding";

export const initValue: TemplateCodingType = {
    id: '0',
    name: '张三',
    currentAddress: '北京',
    phone: '1566666666',
    email: 'example@example.com',
    project: [
        {
            id: 0,
            name: '项目1',
            description: '项目描述:一个项目描述',
        }
    ],
    practice: [
        {
            id: 0,
            name: 'xx有限公司',
            description: '期间主要负责了扫地项目，打扫面积1000平方米。优化了扫地效率，节省了时间。'
        }
    ]
}