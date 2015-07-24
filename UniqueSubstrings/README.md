Title: Find All The Unique Substrings
Author: FVCproductions
[Link](http://www.codewars.com/kata/find-all-the-unique-substrings)

# **The Problem**

## You have a string and you want to find all the possible unique substrings this string has.

### Specifically, you should be *returning the total number of unique substrings*.

---

# **What You Have Now**

A function called `getSubstrings()` with the string `str` as a parameter.

---

# What Can Help Out

- JavaScript has many methods that could possibly come in handy here, such as:
  - [substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) (surprise, surprise),
  - [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort),
  - [.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
  - [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice),
  - [.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push),
  - and finally [.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

> It's up to you how to figure out how to make them work in your favor!

- You also might want to define a helper function for eliminating the duplicates.

---

# To Note

- There should be no repeated substrings/duplicates, each substring should be **unique**.
- The substrings do not have to be actual words.
- You should not be trying to find the substrings of numbers, just actual Strings.
- Your solution should not be case-sensitive, meaning that the function should ignore cases and return all your strings in *lower case*.
- Your substrings can have the same characters repeated within them, *i.e. "mmm" and "ooooo"*.

---

# Happy coding! ^_^
