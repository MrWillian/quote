export const moveToNextInput = () => {
    const active = document.activeElement;
    if (active?.nextElementSibling) {
        (active.nextElementSibling as HTMLElement).focus();
    }
}
