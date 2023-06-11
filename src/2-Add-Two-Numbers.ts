/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0; // Variable to store the carry value
  let res: ListNode | null = null; // Resultant linked list
  let curr: ListNode | null = null; // Current node in the resultant linked list

  while (l1 || l2) {
    // Loop through the linked lists until both are null
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry; // Calculate the sum of current digits plus carry
    carry = Math.floor(sum / 10); // Calculate the new carry value
    const node = new ListNode(sum % 10); // Create a new node with the value of the sum mod 10

    if (!res) {
      // If res is null, assign the new node as the head of the resultant linked list
      res = node;
      curr = node;
    } else {
      // Otherwise, add the new node as the next node to the current node and move the current node forward
      curr!.next = node;
      curr = node;
    }

    l1 = l1?.next || null; // Move to the next node in the first linked list
    l2 = l2?.next || null; // Move to the next node in the second linked list
  }

  if (carry) {
    // If there is a remaining carry value after the loop, create a new node for it and add it to the end of the linked list
    curr!.next = new ListNode(carry);
  }

  return res; // Return the resultant linked list
}
