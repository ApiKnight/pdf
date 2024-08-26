import { setShowEditHeader, useShowEditHeader } from "@/store/showEditHeader";
import EditHeader from "./EditHeader";
import EditProject from "./EditProject";
import { setShowEditProject, useShowEditProject } from "@/store/showEditProject";
import { useCurrentKey } from "@/store/currentKey";
import { setShowEditPractice, useShowEditPractice } from "@/store/showEditPractice";
import EditPractice from "./EditPractice";
import { Drawer } from "antd";
import { useCallback, useMemo } from "react";

function EditForm() {
    const showEditHeader = useShowEditHeader();
    const showEditProject = useShowEditProject();
    const showEditPractice = useShowEditPractice();
    const currentKey = useCurrentKey();

    const isOpen = useMemo(
        () => showEditHeader || showEditPractice || showEditProject
        , [showEditHeader, showEditPractice, showEditProject]
    )

    const handleClose = useCallback(() => {
        setShowEditHeader(false);
        setShowEditPractice(false);
        setShowEditProject(false);
    }, [])

    return (
        <Drawer
            style={{ width: 500 }}
            open={isOpen}
            onClose={handleClose}
            placement="left"
        >
            {
                showEditHeader && <EditHeader />
            }
            {
                showEditProject && <EditProject currentKey={currentKey as number} />
            }
            {
                showEditPractice && <EditPractice currentKey={currentKey as number} />
            }
        </Drawer>
    )
}

export default EditForm;