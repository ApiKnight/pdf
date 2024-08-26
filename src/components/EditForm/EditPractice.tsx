import { setCurrentKey } from "@/store/currentKey";
import { setTemplateCoding, useTemplateCoding } from "@/store/templateCoding";
import { Practice } from "@/types/TemplateCoding";
import { Button, DatePicker, Input } from "antd";
import { ChangeEvent, useCallback } from "react";


interface Props {
    currentKey: number;
}

function EditPractice({currentKey}: Props) {
    const template = useTemplateCoding();
    
    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(v => {
            if (v?.practice == null) {
                return {
                    ...v,
                    practice: [
                        {
                            id: currentKey,
                            name: e.target.value
                        }
                    ]
                }
            }
            console.log(v)
            const temp = v?.practice?.find(item => item.id === currentKey) ?? {
                id: v?.practice?.length,
                name: '',
                description: '' 
            };
            const arr = v?.practice;
            if (temp) {
                temp.name = e.target.value;
            }
            arr[currentKey] = temp as Practice;
            return {
                ...v,
                practice: arr
            }
        })
    }, [currentKey]);

    const handleDescriptionChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTemplateCoding(v => {
            if (v?.practice == null) {
                return {
                    ...v,
                    practice: [
                        {
                            currentKey,
                            description: e.target.value
                        }
                    ]
                }
            }
            const temp = v?.practice?.find(item => item.id === currentKey) ?? {
                id: v?.practice?.length,
                name: '',
                description: '' 
            };
            const arr = v?.practice;
            if (temp) {
                temp.description = e.target.value;
            }
            arr[currentKey] = temp as Practice;
            return {
                ...v,
                practice: arr
            }
        })
    }, [currentKey]);

    const handleAdd = useCallback(() => {
        setCurrentKey(template?.practice?.length);
    },[template?.practice?.length])


    return (
        <div>
            <Input
                placeholder="请输入实习经历名称"
                required
                onChange={handleNameChange}
                value={template?.practice?.[currentKey as number]?.name}
            />
            <DatePicker.RangePicker />
            <Input.TextArea
                placeholder="实习经历描述"
                onChange={handleDescriptionChange}
                value={template?.practice?.[currentKey as number]?.description}
            />
            <Button type="link" onClick={handleAdd}>+添加实习经历</Button>
        </div>
    )
}
export default EditPractice;