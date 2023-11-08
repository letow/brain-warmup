export function shuffle(a: number[], b?: number, c?: number, d?: number) {
    c = a.length;
    while (c) (b = (Math.random() * (--c + 1)) | 0), (d = a[c]), (a[c] = a[b]), (a[b] = d);
}
