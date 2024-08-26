import "./index.css";
import RenderProject from "./RenderProject";
import { useTemplateXml } from "@/hooks/useTemplateXml";
import RenderHeader from "./RenderHeader";
import { useMemo } from "react";
import RenderPractice from "./RenderPractice";

function RenderResume() {
    const xmlObj = useTemplateXml();

    const renderArr = useMemo(() => {
        const result = [];
        for (let i = 0; i < xmlObj.documentElement.children.length; i++) {
            if (xmlObj.documentElement.children[i].tagName === "Header") {
                const index = xmlObj.documentElement.children[i].getAttribute("position") ?? i;
                result.push(<RenderHeader key={index}/>)
            }
            else if (xmlObj.documentElement.children[i].tagName === "Project") {
                const index = xmlObj.documentElement.children[i].getAttribute("position") ?? i;
                result.push(<RenderProject key={index}/>)
            }
            else if (xmlObj.documentElement.children[i].tagName === "Practice") {
                const index = xmlObj.documentElement.children[i].getAttribute("position") ?? i;
                result.push(<RenderPractice key={index}/>)
            }
        }
        return result;
    },[xmlObj.documentElement.children])

    return (
        <div className="coding-container">
            {
                renderArr?.sort((a,b) => parseInt(a.key as string) - parseInt(b.key as string))?.map(item => item)
            }
        </div>
    )
}

export default RenderResume;