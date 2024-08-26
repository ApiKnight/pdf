import { setCurrentKey } from "@/store/currentKey";
import { setShowEditHeader } from "@/store/showEditHeader";
import { setShowEditPractice } from "@/store/showEditPractice";
import { setShowEditProject } from "@/store/showEditProject";
import { useTemplateCoding } from "@/store/templateCoding";
import { Divider } from "antd";
import { useCallback } from "react";

function RenderPractice() {
    const template = useTemplateCoding();
    
    const handleShowEditPractice = useCallback(() => {
        setShowEditPractice(v => !v);
        setShowEditProject(false);
        setShowEditHeader(false);
    },[]);

    const handleChangeCurrentKey = useCallback((e: number) => {
        setCurrentKey(e);
    },[]);
    
    return (
        <div onClick={handleShowEditPractice} style={{marginBottom: 50}}>
            <h4 style={{ lineHeight: 0.2 }}>
                {template?.practice && "实习经历"}
            </h4>
            {
                template?.practice && <Divider />
            }
            {
                template?.practice?.map(item => {
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

export default RenderPractice;