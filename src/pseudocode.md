1. Generate restaurant information
* Restaurant name: Bistro Berg
* Restaurant address: 348 E Main St, Lexington, KY 40507
* Restaurant hours: Tu-Sa 11A-8P

2. Connect API with Axios

3. Dynamic menu
* Lunch and dinner
* Choose at least 15 menu items
 * 5 apps, 5 lunch, and 6 dinner
 * will need more than one API call
* Get a unique price for each item -- have a method to do so, can be random
* Display menu as an organism
* Each menu item as a molecule
 * bootstrap card
 * picture of meal, name, description, and price

4. Must manage the React Component State

### Pseudocode with Ian
* Only need 2 components
 * a molecule and an organism (a menu page and a menu item)

### MENU
##### Constructor
* API data
 * header
 * type_id -- gets meal
 * amount_id -- gets number of items
 * data
* imageArray

##### Controller Methods
* generateImage
 * random image from imageArray
* componentDidMount
 * this.loadAPI
 * this.generateImage
* componentDidUpdate
* loadAPI
 * Axios call
 * loop through meals, copy state, save current meal we're going to display

### ITEM
##### Props
* state
 * price: ""

##### Controller Methods
* generatePrice
 * random price between 8-13 dollars
* componentDidMount
 * this.generatePrice

##### View
* Card
 * image
 * name
 * price
 * description