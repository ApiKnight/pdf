import { setCurrentKey } from "@/store/currentKey";
import { setTemplateCoding, useTemplateCoding } from "@/store/templateCoding";
import { Project } from "@/types/TemplateCoding";
import { Button, DatePicker, Input } from "antd";
import { ChangeEvent, useCallback } from "react";


interface Props {
    currentKey: number;
}

function EditProject({ currentKey }: Props) {
    const template = useTemplateCoding();
    console.log(template?.project)
    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(v => {
            if (v?.project == null) {
                return {
                    ...v,
                    project: [
                        {
                            id: currentKey,
                            name: e.target.value
                        }
                    ]
                }
            }
            console.log(v)
            const temp = v?.project?.find(item => item.id === currentKey) ?? {
                id: v?.project?.length,
                name: '',
                description: '' 
            };
            const arr = v?.project;
            if (temp) {
                temp.name = e.target.value;
            }
            arr[currentKey] = temp as Project;
            return {
                ...v,
                project: arr
            }
        })
    }, [currentKey]);

    const handleDescriptionChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTemplateCoding(v => {
            if (v?.project == null) {
                return {
                    ...v,
                    project: [
                        {
                            currentKey,
                            description: e.target.value
                        }
                    ]
                }
            }
            const temp = v?.project?.find(item => item.id === currentKey) ?? {
                id: v?.project?.length,
                name: '',
                description: '' 
            };
            const arr = v?.project;
            if (temp) {
                temp.description = e.target.value;
            }
            arr[currentKey] = temp as Project;
            return {
                ...v,
                project: arr
            }
        })
    }, [currentKey]);

    const handleAdd = useCallback(() => {
        setCurrentKey(template?.project?.length);
    },[template?.project?.length]);

    return (
        <div>
            <Input
                placeholder="请输入项目名称"
                required
                onChange={handleNameChange}
                value={template?.project?.[currentKey]?.name}
            />
            <DatePicker.RangePicker />
            <Input.TextArea
                placeholder="项目描述"
                onChange={handleDescriptionChange}
                value={template?.project?.[currentKey]?.description}
            />
            <Button type="link" onClick={handleAdd}>+添加项目经历</Button>
        </div>
    )
}

export default EditProject;