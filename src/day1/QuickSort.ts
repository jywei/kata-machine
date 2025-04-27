function quick_sort_recur(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);

    // left
    quick_sort_recur(arr, low, pivotIdx - 1);
    // right
    quick_sort_recur(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let idx = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    const tmp = arr[idx];
    arr[idx] = arr[high];
    arr[high] = tmp;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    quick_sort_recur(arr, 0, arr.length - 1);
}