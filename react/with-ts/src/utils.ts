export function wait(millis: number) {
    const now = Date.now();
    while (Date.now() - now < millis) ; 
}