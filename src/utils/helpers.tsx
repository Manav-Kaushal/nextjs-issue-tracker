function template(i: number) {
    return `
      &:nth-child(${i}) {
        animation-delay: ${`${i * 100}ms`};
       }
    `;
}

export function getAnimations(items: number): string {
    let str = "";
    for (let i = 1; i < items; i += 1) {
        str += template(i);
    }
    return str;
}

export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
