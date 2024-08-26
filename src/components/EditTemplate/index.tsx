import { setShowEditTemplateModal, useShowEditTemplateModal } from "@/store/showEditTemplateModal";
import { setTemplate, useTemplate } from "@/store/template";
import { Editor } from "@monaco-editor/react";
import { Modal } from "antd";
import { useCallback } from "react";

function EditTemplate() {
    const isShow = useShowEditTemplateModal();
    const template = useTemplate();

    const handleClose = useCallback(() => {
        setShowEditTemplateModal(false)
    },[]);

    const handleChange = useCallback((value: string | undefined) => {
        console.log(value)
        setTemplate(value)
    },[]);

    return (
        <Modal
            open={isShow}
            onCancel={handleClose}
        >
            <Editor
                width={500}
                height={600}
                value={template}
                defaultValue=""
                language="xml"
                onChange={handleChange}
            />¸
        </Modal>
    )
}

export default EditTemplate;