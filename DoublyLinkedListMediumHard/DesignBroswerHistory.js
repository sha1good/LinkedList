// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

// Example:

// Input:
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
// [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
// Output:
// [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

// Explanation:
// BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
// browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
// browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
// browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
// browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
// browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
// browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
// browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
// browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
// browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
// browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

// Constraints:

// 1 <= homepage.length <= 20
// 1 <= url.length <= 20
// 1 <= steps <= 100
// homepage and url consist of  '.' or lower case English letters.
// At most 5000 calls will be made to visit, back, and forward.

class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

class BrowserHistory {
  constructor(currentPage) {
    this.currentPage = new Node(currentPage);
  }

  visit(url) {
    let newNode = new Node(url);
    this.currentPage.next = newNode;
    newNode.back = this.currentPage;
    this.currentPage = newNode;
  }

  back(steps) {
    while (steps > 0) {
      if (this.currentPage.back) this.currentPage = this.currentPage.back;
      else break;
      steps--;
    }
    return this.currentPage.data;
  }

  forward(steps) {
    // if this steps is greater than 0
    while (steps) {
      if (this.currentPage.next) this.currentPage = this.currentPage.next;
      else break;
      steps--;
    }

    return this.currentPage.data;
  }
}

// Example usage:
const browser = new BrowserHistory("leetcode.com")
browser.visit("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");
console.log(browser.back(1))
console.log(browser.back(1)); // Output: "google.com"
console.log(browser.forward(1)); // Output: "facebook.com"
browser.visit("linkedin.com");
console.log(browser.forward(2))  // Output: "Linkedin.com"
console.log(browser.back(2)); // Output: "google.com"
console.log(browser.back(7)); // Output: "leetcode.com"


// Time complexity is O(steps) + O(1)
// space O(1)