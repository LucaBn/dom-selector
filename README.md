# dom-selector

A lightweight JavaScript library inspired by jQuery for simplified DOM element selection.

## Overview

**dom-selector** provides a minimalistic approach to DOM manipulation, making it easy to select and interact with elements on the web page. The library is designed to be lightweight and straightforward, offering a simplified syntax similar to jQuery's `$` function.

Read how [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) works if you are not familiar with it.

## Features

**Intuitive Selection:** use the `$` function to select elements by CSS selector.

**Element Iteration:** iterate through selected elements with a convenient forEach method.

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/LucaBn/dom-selector.git
```

### Usage Examples

```javascript
// Select all <div> elements
const divElements = $("div");

// Iterate through selected elements
divElements.forEach((element, index) => {
  console.log(`Element ${index + 1}:`, element);
});
```

```javascript
// Select all elements with .title class
const titleElements = $(".title");

// Iterate through selected elements
titleElements.forEach((element, index) => {
  console.log(`Element ${index + 1}:`, element);
});
```
