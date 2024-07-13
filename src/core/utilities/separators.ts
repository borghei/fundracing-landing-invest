export function digitSeparator(value: any): string {
    if (!value && value !== 0) return value;
    value = deleteCommaSeparator(value)

    let [integerPart, decimalPart] = value.toString().split(".");

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

export function deleteCommaSeparator(value: any): any {
    if (!value && value !== 0) return value;

    return value.toString().replaceAll(",", "");
}