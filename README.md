Pitch: Most working Americans have but only 2-3 hours to spare between coming home from work and having to go to bed the next day. 
Why waste your time managing your pantry in the age of innovation? Our food management system will help you visualize what's in your house, 
and conveniently auto-order ingredients and other small kitchen necessities from online retailers, allowing you to focus on the cooking and eating! 


Functionality:
Users can input which foods they have in their house and are given recipes that create delicious meals given the ingredients.
Users are given reminders on what else to buy and when to make the most of what they have, saving them money.
Boyardone! will automatically add needed items to the customers Kroger cart for easy shopping and fulfillment.
Users can share their kitchen creations automatically on various social media sites
Users can store their own recipes and get auto generated shopping lists 
Users can create to-do/shopping lists for convenient access
Users can favorite certain recipes to streamline the cook-to-eat process

Components:
Backend: 
Our plan is to create a backend system with PHP that accesses a SQL database of users, their ingredients, their saved recipes, and a plethora of generic recipes. We chose PHP and an SQL database because one member of the team already has extensive experience with these methods.
A matching algorithm will dispatch recipes to users to fit their ingredients with the least amount of additional waste, which the API can automatically order or create shopping lists.
Ordering ingredients will be handled using some grocery store’s API. Currently, Kroger and Instacart’s APIs appear most promising in terms of both ease of use and functionality.
To test the PHP code, we will be using the open-source PHP testing library Storyplayer. There will be a set of tests on each page for all of its intended functions to ensure that new changes do not disrupt former functionalities.
Frontend: 
The frontend will be a website using html, css, and javascript with several Bootstrap elements to give a clean look while maintaining high functionality. These components were chosen because they are standard for most web pages.
Using <form> and <input> elements, users will be able to input their ingredients and dietary restrictions/preferences for processing by the backend. These elements were chosen because they are one of the most basic forms of user input on websites, and they are very compatible with PHP.
Several web pages will be available for users:
Users will also be able to indicate which ingredients they have run out of to be added to their shopping list and to narrow their meal options.
Users then see possible meal options to plan out their week’s meals and suggested ingredients that would offer more options
Users can also access and edit a shopping list of items they are low on or had suggested
