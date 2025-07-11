"use strict";

let injectorCounter: number = 0;

export function ResetInjector(): void {
  injectorCounter = 0;
}

export function injectorReady(): boolean {
  return injectorCounter === 0;
}

export function ParseElement(el: HTMLElement, target: HTMLElement): Node[] {
  const arr: Node[] = [];
  if (!el || !el.hasChildNodes()) {
    return arr;
  }
  const nodes: HTMLCollection = el.children;
  for (let i: number = 0; i < nodes.length; i++) {
    let tempNode: HTMLElement;
    const child = nodes.item(i);
    if (child && child.nodeName.toLowerCase() === "script") {
      tempNode = createScriptNode(child);
    } else {
      tempNode = child?.cloneNode(true) as HTMLElement;
    }
    if (tempNode) {
      target.appendChild(tempNode);
      arr.push(tempNode);
    }
  }
  return arr;
}

function createScriptNode(refNode: Element): HTMLElement {
  const script: HTMLScriptElement = document.createElement("script");
  const attr: NamedNodeMap = refNode.attributes;
  for (let i: number = 0; i < attr.length; i++) {
    const attrItem = attr[i];
    if (attrItem && attrItem.name && attrItem.textContent) {
      script.setAttribute(attrItem.name, attrItem.textContent);
      if (attrItem.name.toLowerCase() === "src") {
        // waiting only for src to finish loading - async operation
        injectorCounter++;
        script.onload = () => {
          injectorCounter--;
        };
      }
    }
  }
  script.innerHTML = refNode.innerHTML;
  return script;
}

export function RunHTMLWidgetRenderer(): void {
  // rendering HTML which was created by HTMLWidgets package
  // wait till all the script elements are loaded
  const intervalVar: number = window.setInterval(() => {
    if (injectorReady()) {
      window.clearInterval(intervalVar);
      const htmlWidgets = (window as any).HTMLWidgets;
      if (htmlWidgets && htmlWidgets.staticRender) {
        htmlWidgets.staticRender();
      }
    }
  }, 100);
}