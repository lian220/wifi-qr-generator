import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// DOM 요소의 모든 oklch 색상을 hex로 변환하는 함수
export function convertOklchColorsInElement(element: HTMLElement): void {
  // 주요 색상 속성들을 직접 변환
  const colorProperties = ['color', 'background-color', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'];
  
  colorProperties.forEach(property => {
    const value = window.getComputedStyle(element).getPropertyValue(property);
    if (value && value.includes('oklch')) {
      // 임시 요소를 생성하여 색상 변환
      const tempElement = document.createElement('div');
      tempElement.style.setProperty(property, value);
      document.body.appendChild(tempElement);
      
      const convertedValue = getComputedStyle(tempElement).getPropertyValue(property);
      document.body.removeChild(tempElement);
      
      if (convertedValue && !convertedValue.includes('oklch')) {
        element.style.setProperty(property, convertedValue);
      }
    }
  });
  
  // 자식 요소들도 재귀적으로 처리
  Array.from(element.children).forEach(child => {
    if (child instanceof HTMLElement) {
      convertOklchColorsInElement(child);
    }
  });
}
