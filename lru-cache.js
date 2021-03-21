class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  splice(node) {
    /* одна нода в списке */
    if (!node.prev && !node.next) {
      this.head = this.tail = null;
      /*первый элемент*/
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
      /* последний эелмент*/
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
      /*не первая и не последняя нода */
    } else {
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
      node.next = node.prev = null;
    }
    this.length--;
  }

  unshift(node) {
    if (this.tail) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = this.tail = node;
    }
    this.length++;
  }

  pop() {
    const tail = this.tail;
    this.splice(this.tail);
    return tail;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.q = new LinkedList();
    this.m = {};
  }

  get(key) {
    if (!this.m[key]) {
      return -1;
    }
    const {value} = this.m[key];
    this.put(key, value);
    return value;
  }

  put(key, value) {
    if (this.m[key]) {
      this.q.splice(this.m[key]);
      this.m[key] = null;
    }
    const node = new ListNode(key, value);
    this.q.unshift(node);
    this.m[key] = node;
    if (this.q.length > this.capacity) {
      this.m[this.q.pop().key] = null;
    }
  }
}


const cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 1);
cache.get(2);
cache.put(3, 1);
cache.put(4, 1);
console.log(cache.q)
