/* eslint-env greasemonkey, browser */
// ==UserScript==
// @name         leetcode-hide-locked
// @namespace    weibo.com/flowmemo
// @version      0.1.0
// @description  hide locked problems in LeetCode
// @author       flowmemo
// @match        https://leetcode.com/problemset/*
// @grant        none
// @license      MIT
// @supportURL   https://github.com/leetcode-hide-locked
// ==/UserScript==

; (function () {
  'use strict'
  function removeLocked () {
    const locked = document.getElementsByClassName('fa-lock')
    Array.prototype.forEach.call(locked, item => {
      const tr = item.parentElement.parentElement.parentElement
      if (tr.tagName === 'TR') tr.style.display = 'none'
    })
  }
  const problemList = document.querySelector('div[data-reactroot]')
  const observer = new MutationObserver(removeLocked)
  observer.observe(problemList, { childList: true, subtree: true })
})()
