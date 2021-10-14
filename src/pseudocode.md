1. Generate restaurant information
* Restaurant name: Bistro Berg
* Restaurant address: 348 E Main St, Lexington, KY 40507
* Restaurant hours: Tu-Sa 11A-3P

2. Connect API with Axios

3. Dynamic menu
* Lunch and dinner
* Choose at least 15 menu items
 * 9 lunch and 6 dinner
 * will need more than one API calls
* Get a unique price for each item -- have a method to do so, can be random
* Display menu as an organism
* Each menu item as a molecule
 * bootstrap card
 * picture of meal, name, and price

4. Must manage the React Component State

### Pseudocode with Ian
* Only need 2 components
 * a molecule and an organism (a menu page and a menu item)

### MENU
##### Props
* API call
 * type_id -- gets meal
 * amount_id -- gets number of items
* Image
* Price

##### Controller Methods
* generateImage?
* generatePrice?
* componentDidMount
* componentDidUpdate
* loadAPI
 * Axios call

### ITEM
##### Props
* API fed -- name
 * // response.data[0].name;
* API fed -- description
 * // response.data[0].description;

##### View
* Card
 * image
 * name
 * description
 * price