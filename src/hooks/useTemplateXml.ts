import { useTemplate } from "@/store/template"
import { parseXml } from "@/utils/parseXml";
import { useMemo } from "react";

export const useTemplateXml = () => {
    const template = useTemplate();
    const obj = useMemo(() => (
        parseXml(template as string)
    ),[template]);
    
    return obj;
}