import { setCurrentKey } from "@/store/currentKey";
import { setShowEditHeader } from "@/store/showEditHeader";
import { setShowEditPractice } from "@/store/showEditPractice";
import { setShowEditProject } from "@/store/showEditProject";
import { useTemplateCoding } from "@/store/templateCoding";
import { Divider } from "antd";
import { useCallback } from "react";

function RenderProject() {
    const template = useTemplateCoding();
    
    const handleShowEditProject = useCallback(() => {
        setShowEditProject(v => !v);
        setShowEditHeader(false);
        setShowEditPractice(false);
    },[]);

    const handleChangeCurrentKey = useCallback((e: number) => {
        setCurrentKey(e);
    },[]);
    
    return (
        <div onClick={handleShowEditProject} style={{marginBottom: 50}}>
            <h4 style={{ lineHeight: 0.2 }}>
                {template?.project && "项目经历"}
            </h4>
            {
                template?.project && <Divider />
            }
            {
                template?.project?.map(item => {
                    return (
                        <div key={item?.id} onClick={() => {
                            handleChangeCurrentKey(item?.id)
                        }}>
                            <h4>
                                {item?.name}
                            </h4>
                            <div style={{ whiteSpace: 'pre-wrap', color: "gray", fontSize: 14 }}>
                                {item?.description}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RenderProject;