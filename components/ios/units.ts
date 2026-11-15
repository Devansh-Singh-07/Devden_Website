/** Every measurement inside a phone is expressed in logical iPhone points. */
export const u = (n: number) => `calc(var(--u) * ${n})`;
