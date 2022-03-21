<p align="center">
  <img src="https://user-images.githubusercontent.com/97575616/152998646-3b953cf4-520f-4f70-822c-5498b7e77530.png" width="400px" alt="">
</p>

<h1 align="center">Driven Eats</h1>

[![uses-javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
![uses-html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![uses-css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![built-with-git](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)
![built-with-vsc](https://img.shields.io/badge/VISUAL%20STUDIO%20CODE-blue?style=for-the-badge&logo=visualstudiocode)
[![License: MIT](https://img.shields.io/badge/LICENSE-MIT-blue?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Table of contents
* [Project Description](#project-description)
* [Status](#status)
* [Mobile App](#mobile-app)
* [Requirements](#requirements)
* [Author](#author)


## Project Description
<p align="justify">My first project using JavaScript was the implementation of the mobile site called DrivenEats. The website allows you to easily choose your combo, as well as input the NAME and ADDRESS information, then send a standardized message with the summary of the order and all the data via WhatsApp directly to the restaurant.</p>

### Status
![status-finished](https://user-images.githubusercontent.com/97575616/152926720-d042178b-24c0-4d6b-94fb-0ccbd3c082cc.svg)

### Mobile App
<div align="center">
  <img width="500px" src="https://user-images.githubusercontent.com/97575616/157726794-8e44aa1c-fd7a-4d68-98f7-a9b78df41003.gif" alt="site-mobile">
</div>

  
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
  - [x] When clicking on an item, it must be marked as selected
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
<div align="center">
<img width= 200px src="https://user-images.githubusercontent.com/97575616/157583676-812b2612-a644-4c18-be9c-61f633406f50.png" alt=""/>
  <p> <i><b>Thales Gomes Targino</i></b> </p>

<br /> [![Twitter Badge](https://img.shields.io/badge/-@thales_targino-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/thales_targino)](https://twitter.com/thales_targino) [![Linkedin Badge](https://img.shields.io/badge/-thalesgomest-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thales-gomes-targino/)](https://www.linkedin.com/in/thales-gomes-targino/) 
[![Gmail Badge](https://img.shields.io/badge/-thalestargino@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thalestargino@gmail.com)](mailto:thalestargino@gmail.com)
  
</div>
