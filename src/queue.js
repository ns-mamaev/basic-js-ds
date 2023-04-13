const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    const newItem = new ListNode(value);
    let current = this.queue;
    while (current?.next) {
      current = current.next;
    }
    if (current) {
      current.next = newItem;
    } else {
      this.queue = newItem;
    }
  }

  dequeue() {
    if (!this.queue) {
      return;
    }
    let removed = this.queue.value;
    if (this.queue.next === null) {
      this.queue = null;
    } else {
      this.queue = this.queue.next;
    }
    return removed;
  }
}

module.exports = {
  Queue
};
