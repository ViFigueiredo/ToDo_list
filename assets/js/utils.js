// Função para adicionar classes
export function addClasses(element, ...classNames) {
    element.classList.add(...classNames);
}

// Função para criar elementos com classes
export function createElementWithClasses(tagName, ...classNames) {
    const element = document.createElement(tagName);
    addClasses(element, ...classNames);
    return element;
}
