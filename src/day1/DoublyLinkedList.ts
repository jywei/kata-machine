type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        } else if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }

        this.length++;
        const curr = this.get(idx) as Node<T>;
        const node = { value: item } as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (curr.prev) {
            curr.prev.next = node;
        }   
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }   

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {

    }

    get(idx: number): T | undefined {
        let curr = this.head;
        // loop through the list until we find the index, and it has to be something there
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }

    removeAt(idx: number): T | undefined {

    }
}