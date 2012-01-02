Brand Box
=========
![Screenshot](http://akaidiot.github.com/MooTools-BrandBox/brandbox.png)

BrandBox is a simple widget that enables the use of existing DOM elements to create widget that cycles through pieces of content. Whether these pieces of content are images, pieces of text or flash videos is left to the user. 

Optionally, the class can create numbered 'tabs' and/or a list indicating the names of the items that are cycled. Both the tabs and the list will hilight along with the content that is currently being showed by applying a user-defined class to the corresponding items. 

The styling of the entire plugin (including the positioning of the container and contents) is left to the user. See the demo for an example of this. 

The code (`BrandBox.js`) will work with both MooTools 1.3 and 1.4, without needing compatibility layer. 

How To Use
----------

A brand box is created by supplying an id or an element containing the pieces of content that should be cycled. Consider the following HTML snippet to be turned into a brand box: 

	#HTML
	<div id="items">
		<div class="item">
			<h2>This is the first item</h2>
			<p>The first item in the brand box sadly does not contain anything interesting.</p>
		</div>
		<div class="item">
			<h2>The second item is similar</h2>
			<p>The scond item is also not all that interesing.</p>
		</div>
		<div class="item">
			<h2>Some markup</h2>
			<p>
				<img src="path/to/image.png" alt=":)" /><br/>
				And some text too. 
			</p>
		</div>
	</div>

To create a brand box from the markup shown, a call to the constructor as such will suffice: 

	#JS
	var myBrandBox = new BrandBox('items');

Based on the default values for BrandBox' options, the contents whithin each element with class `item` will be shown in turn. 

## Constructor 

### Syntax: 

	#JS
	var myBrandBox = new BrandBox(container[, options]);

### Arguments: 

1. container - (*element* or *string*) The element containing the brand box' items, or the id of that element. 
2. options - (*object*, optional) An options object, see below. 

### Options:

- items - (*string*, default `.item`) A selector to select the content items within the container. 
- headers - (*string*, default `h2`) A selector to select the header (name) of an item within an item. 
- tabs - (*element*, default `false`) A list element to hold the numbered tabs corresponding with the content elements. Numbered tabs are not created if this options evaluates to false. The `headers` option needs to yield headers for each element for this to work. 
- tabItemClass - (*string*, default `tab`) CSS class for the tab elements. 
- tabActiveClass - (*string*, default `active`) CSS class to apply to the active tab element. 
- list - (*element*, default `false`) A list element to hold the list items containing the item headers corresponding with the content elements. The list is not created if this options evaluates to false. The `headers` option needs to yield headers for each element for this to work. 
- listItemClass - (*string*, default `litem`) CSS class for the list items. 
- listActiveClass - (*string*, default `active`) CSS class to apply to the active list item. 
- interval - (*number*, default 5000) Number of milliseconds to show each item. 

## start

Starts the periodic showing of content items. 

### Syntax

	#JS
	myBrandBox.start();

### Events

- start - (*function*) Function executed when the brand box starts. 

## stop

Stops the periodic showing of elements. 

### Syntax

	#JS
	myBrandBox.stop();

### Events

- stop - (*function*) Function executed when the brand box stops. 

## previous 

Shows the previous item. 

### Syntax

	#JS
	myBrandBox.previous([animate[, userInitiated]]);

### Events

- change - (*function*) Function executed when the brand box shows a different item. 

### Arguments 

1. animate - (*boolean*, default `true`) Whether to animate the transition. 
2. userInitiated - (*boolean*, default `true`) Whether to restart the timer for the next item. 

## next

Shows the next item, analogous to `previous()`.

## show 

Shows a particular item by index. 

### Syntax

	#JS
	myBrandBox.show(index[, animate[, userInitiated]]);

### Arguments

1. index - (*number*) The index of the item to show. 
2. animate - (*boolean*, default `true`) Whether to animate the transition. 
3. userInitiated - (*boolean*, default `true`) Whether to restart the timer for the next item. 

### Events

- change - (*function*) Function executed when the brand box shows a different item. 

Changelog
---------

### 0.2

- update to MooTools 1.4. (functional code unchanged)

### 0.1

- initial release 

