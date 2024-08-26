import { setShowEditHeader } from "@/store/showEditHeader";
import { setShowEditProject } from "@/store/showEditProject";
import { useTemplateCoding } from "@/store/templateCoding"
import { useCallback } from "react";
import "./index.css";
import { setShowEditPractice } from "@/store/showEditPractice";

function RenderHeader() {
    const template = useTemplateCoding();
    const handleShowEditHeader = useCallback(() => {
        setShowEditHeader(v => !v);
        setShowEditProject(false);
        setShowEditPractice(false);
    },[]);
    
    return (
        <div onClick={handleShowEditHeader}>
            <h3 style={{ textAlign: 'center', lineHeight: '0.2' }}>
                {template?.name}
            </h3>
            <div className="flex">
                <h4>
                    {template?.phone}
                </h4>
                <h4>
                    {template?.email}
                </h4>
                <h4>
                    {template?.currentAddress}
                </h4>
            </div>
        </div>
    )
}

export default RenderHeader;