<p align="center">
  <img src="https://user-images.githubusercontent.com/97575616/152998646-3b953cf4-520f-4f70-822c-5498b7e77530.png" width="400px" alt="">
</p>

<h1 align="center">Driven Eats</h1>

[![uses-javascript](https://user-images.githubusercontent.com/97575616/152987324-94b641c3-8073-4132-9950-7b7e56179080.svg)](https://www.javascript.com)
![uses-html5](https://user-images.githubusercontent.com/97575616/152926412-a8c6da7f-0d54-4253-a820-cb264210bbcf.svg)
![uses-css](https://user-images.githubusercontent.com/97575616/152917480-e46ad631-d96c-413d-8b62-25012c52c7fc.svg)
![built-with-git (1)](https://user-images.githubusercontent.com/97575616/152927121-6e37ae20-6f09-4f84-9bdf-889ef6ef5773.svg)
![built-with-visual-studio-code](https://user-images.githubusercontent.com/97575616/152921255-9e6ad64b-5a0d-4f28-a3d0-f8c6a2774d85.svg)
[![License: MIT](https://user-images.githubusercontent.com/97575616/152917040-e317b158-cad1-4f6c-8985-0a555783da7e.svg)](https://opensource.org/licenses/MIT)

## Table of contents
* [Project Description](#project-description)
* [Status](#status)
* [Requirements](#requirements)
* [Author](#author)


## Project Description
<p align="justify">My first project using JavaScript was the implementation of the mobile site called DrivenEats. The website allows you to easily choose your combo, as well as input the NAME and ADDRESS information, then send a standardized message with the summary of the order and all the data via WhatsApp directly to the restaurant.</p>

### Status
![status-finished](https://user-images.githubusercontent.com/97575616/152926720-d042178b-24c0-4d6b-94fb-0ccbd3c082cc.svg)

## Requirements

* **GENERAL**
    - [x] Do not use any library to implement this project (jQuery, lodash, react, etc), or other languages that compile to JS (TypeScript, ELM, etc), only pure JavaScript.
    - [x] The project must be developed using Git and GitHub, in a public repository.
    - [x] **For each requirement implemented** make a *commit* with a descriptive message of what you have evolved.

* **LAYOUT**
  - [x] Apply layout for mobile
  - [x] Top and close order button must have fixed placement and not scroll with scrollbar
  - [x] You can use random images and text to illustrate the page, but vary the price for each item in the same category
  - [x] The fonts used are: [Righteous](https://fonts.google.com/specimen/Righteous) (restaurant name and category titles) and [Roboto](https://fonts.google.com/specimen/Roboto) (other texts)
  - [x] To make the shadows present in some elements, research on how to apply shadows in CSS and play around with the values until it looks like the layout images
  - [x] To make products scroll horizontally, use `overflow-x: scroll`. In desktop mode a scroll is displayed, but in mobile mode not. 

* **ITEM SELECTION**
  - [x] When clicking on an item, it must be marked as selected, following screen layout 3
  - [x] When clicking on an item, if there is already an item selected in the same category, it must be deselected and the new item clicked must be the new selected item
  - [x] When clicking on an item already marked, it is **not** necessary to unmark it 

- **END ORDER BUTTON**
 - [x] By default, the checkout button should be disabled. When clicking the button in this state, nothing should happen.
 - [x] When the user has selected the items from the 3 categories, the button must change to the enabled state, following screen layout 

- **ORDER SUBMISSION**
 - [x] Upon finalizing the order, the user must be forwarded to **WhatsApp Web**, in conversation with the restaurant's contact, with a standard message already filled in 

- **BONUS**

   - [x] Ask for name and address
    - When clicking on checkout, issue two `prompt` to the user asking for their name and address. This information must then be added to the final message that is sent by WhatsApp
   - [x] Confirm the data before finalizing the order
    - When clicking "Checkout" instead of going to WhatsApp direct, first review the purchase by a Bonus screen 

### Author
---

<img width= 200px src="https://octodex.github.com/images/baracktocat.jpg" alt=""/>
<b>Thales Gomes Targino</b> 



<br /> [![Twitter Badge](https://img.shields.io/badge/-@thales_targino-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/thales_targino)](https://twitter.com/thales_targino) [![Linkedin Badge](https://img.shields.io/badge/-thalesgomest-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thales-gomes-targino/)](https://www.linkedin.com/in/thales-gomes-targino/) 
[![Gmail Badge](https://img.shields.io/badge/-thalestargino@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thalestargino@gmail.com)](mailto:tgmarinho@gmail.com)
