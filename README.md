# README #


## basix-js ##

You may contribute to this framework!

basix-js is meant for cutting developing time and for modifying the html DOM elements easier!

- https://www.npmjs.com/package/basix-js-fw ( npm install basix-js-fw )
- https://github.com/phasi/basix-js

(ps. If you want the old version it's 0.0.8)


## Get started ##

- Get started by reading the examples.html in project root. (Some are missing).
- You may contribute and make usage examples!


Add source on your HTML document:

```

<script src="basix.js"></script>

```

Initialize basix-js by adding the following into page body:

```

<script type="text/javascript">
// Initialize basix-js
	var bx = new basixJS();
</script>

```


## Usage examples ##


### Example 1

Replace elementID with HTML-element id. For example:
**JS:**
```
bx.setElementText("elementID", "Sample text");
```
**And HTML:**
```
<div id="elementID"></div>
```

### Example 2

**JS:**
```
bx.replaceElement(id, childId, type, text, newElementId);
```

- If you want to do replace, but keep same id, then don't define newElementId.

**Another usage in HTML:**
```
    <div id="test7">
        <p><b>Test 7:</b></p>
        <p id="test7-b">This is the element you want to replace.</p>
        <button onclick="bx.replaceElement('test7', 'test7-b', 'button', 'Replaced!', 'test7-b')">Try</button>
    </div>
```

### Example 3

**Usage in HTML:**
```

<p><b>Test 15:</b></p>
	<style>
		.testclass15-b {
			background-color:#9c9c9c;
		}
	</style>
	
	<div id="test15"></div>
	<script>
		// Create settings object (all settings below)
		var s = {};
		s.parentId = "test15"; // required
 		s.boxId = "test15-b"; // required
 		s.width = "100%"; // required
 		s.height = "300px"; // required
		s.className = "testclass15-b"; // optional
		s.position = "inherit"; // optional
		s.text = "Success!"; // optional
 		s.border = "1px solid rgba(0,0,0,0.4)"; // optional
 		s.boxShadow = "1px 1px 1px black"; // optional
 		s.borderRadius = "10px"; // optional
		// Run bx.createBox() with your settings
		bx.createBox(s);
	</script>
```

### Example 4:

**Example usage:**
```
		<!-- Example 18 Math / Sort integer arrays easier 
		// bx.sortIntArray(direction) (asc / desc)
		-->

		<p><b>Test 18: </b></p>
		<div id="test18">
		</div>

		<script>
			// Create test array with numbers
			var test18array = [56, 43, 23, 77, 99, 23, 101, 43, 1, 0, 54];
			
			// Create table and put numbers into it
			bx.createElement("test18", "table", "", "test18-b");
			// Iterate over array
			for (i=0; i < test18array.length; i++) {
			bx.createElement("test18-b", "tr", "", "test18-c"+i);
			bx.createElement("test18-c"+i, "td", test18array[i], "test18-d"+i);
			}
			
			// Create button
			bx.createElement("test18", "button", "Sort!", "test18sortbutton");
			// Add eventlistener for it
			bx.AddEventListener("test18sortbutton", "click", test18doReplace);

			// This is where we do the actual sorting in this example
			function test18doReplace() {
				// DO SORT
				test18array = BXSortIntArray(test18array, "asc"); // asc or desc
				// Replace our table with new table
				bx.replaceElement("test18", "test18-b", "table", "", "test18-b");
				// Iterate over array
				for (i=0; i < test18array.length; i++) {
				bx.createElement("test18-b", "tr", "", "test18-c"+i);
				bx.createElement("test18-c"+i, "td", test18array[i], "test18-d"+i);
				}
			}
		</script>
```

### Example 5:

**Example HTTP GET request**

```
		<!--
			Example 21 - HTTP Requests
		// bx.httpGet(url, successFunction) returns JSON object or array-->

		<p><b>Test 21 HTTP GET (Returns JSON): </b></p>
		<div id="test21">
		 Click the button to try!
		</div>
		<button id="runtest21">Run test</button>

		<script>	
			// Add eventlistener for run button
			bx.AddEventListener("runtest21", "click", function() {

				// Get our JSON Object and handle response
				bx.httpGet("https://jsonplaceholder.typicode.com/posts/1", function(response){
				// Log response to console
				console.log(response);
				// Create heading and paragraph for response
				bx.createElement("test21", "h3", response.title, "test21-heading");
				bx.createElement("test21", "p", response.body, "test21-body");
				});
			});

		</script>
```

##### Read more in examples.html
