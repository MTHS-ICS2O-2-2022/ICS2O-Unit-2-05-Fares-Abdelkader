// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Fares Abdelkader
// Created on: March 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function enterClicked() {
  // input
  const worked = parseInt(document.getElementById('worked').value)
  const rate = parseInt(document.getElementById('rate').value)

  // process
  const pay = (worked * rate) * (1.00 - 0.18)
  const taken = (worked * rate) * 0.18

  // output
  document.getElementById('pay').innerHTML = 'Your salary is: ' + pay.toFixed(2) + '$'
  document.getElementById('taken').innerHTML = 'The goverment will take: ' + taken.toFixed(2) + '$'
}
