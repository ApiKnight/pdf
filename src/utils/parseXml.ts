export function parseXml(xml: string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    return xmlDoc;
}

// export function traverseXml(node: Node, result: ReactNode[] = []) {
//     if (node.nodeType === Node.ELEMENT_NODE) {
//         result.push();
//         Array.from(node.childNodes).forEach(child => traverseXml(child, result));
//         result.push(`</${node.tagName}>`);
//     } else if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
//         result.push(node.nodeValue.trim());
//     }
//     return result;
// }