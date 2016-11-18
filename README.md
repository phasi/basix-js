# README #


## Basix JS Framework ##

This framework is under (slow) development. All versions below 1.0 are still dev-versions.

Basix JS FW is meant to cut developing time and to modify html elements easily!

## Get started ##

- Get started by reading the examples.html in project root.
- Some documentations might be missing from the examples, too see all functions scroll through the js file!

- Add source on your HTML document
```
<script src="basix-js-fw.js"></script>
```


## Usage examples ##


### Example 1

Replace elementID with HTML-element id. For example:
**JS:**
```
BXSetElementText("elementID", "Sample text");
```
**And HTML:**
```
<div id="elementID"></div>
```

### Example 2

**JS:**
```
BXReplaceElement(id, childId, type, text, newElementId);
```

- If you want to do replace, but keep same id, then don't define newElementId.

**Another usage in HTML:**
```
    <div id="test7">
        <p><b>Test 7:</b></p>
        <p id="test7-b">This is the element you want to replace.</p>
        <button onclick="BXReplaceElement('test7', 'test7-b', 'button', 'Replaced!', 'test7-b')">Try</button>
    </div>
```

### Example 3

**Usage in HTML:**
```
<!-- Example 15 - HTML Tools / Create box
Easy to create! -->

<p><b>Test 15:</b></p>
	<style>
		.testclass15-b {
			background-color:#9c9c9c;
		}
	</style>
	
	<div id="test15"></div>
	<script>
		// Create settings object (all settings below)
		var t15Settings = {};
		t15Settings.parentId = "test15"; // required
 		t15Settings.boxId = "test15-b"; // required
 		t15Settings.width = "100%"; // required
 		t15Settings.height = "300px"; // required
		t15Settings.className = "testclass15-b"; // optional
		t15Settings.position = "inherit"; // optional
		t15Settings.text = "Success!"; // optional
 		t15Settings.border = "1px solid rgba(0,0,0,0.4)"; // optional
 		t15Settings.boxShadow = "1px 1px 1px black"; // optional
 		t15Settings.borderRadius = "10px"; // optional
		// Run BXCreateBox() with your settings
		BXCreateBox(t15Settings);
	</script>
```

### Example 4:

**Example usage:**
```
		<!-- Example 18 Math / Sort integer arrays easier 
		// BXSortIntArray(direction) (asc / desc)
		-->

		<p><b>Test 18: </b></p>
		<div id="test18">
		</div>

		<script>
			// Create test array with numbers
			var test18array = [56, 43, 23, 77, 99, 23, 101, 43, 1, 0, 54];
			
			// Create table and put numbers into it
			BXCreateElement("test18", "table", "", "test18-b");
			// Iterate over array
			for (i=0; i < test18array.length; i++) {
			BXCreateElement("test18-b", "tr", "", "test18-c"+i);
			BXCreateElement("test18-c"+i, "td", test18array[i], "test18-d"+i);
			}
			
			// Create button
			BXCreateElement("test18", "button", "Sort!", "test18sortbutton");
			// Add eventlistener for it
			BXAddEventListener("test18sortbutton", "click", test18doReplace);

			// This is where we do the actual sorting in this example
			function test18doReplace() {
				// DO SORT
				test18array = BXSortIntArray(test18array, "asc"); // asc or desc
				// Replace our table with new table
				BXReplaceElement("test18", "test18-b", "table", "", "test18-b");
				// Iterate over array
				for (i=0; i < test18array.length; i++) {
				BXCreateElement("test18-b", "tr", "", "test18-c"+i);
				BXCreateElement("test18-c"+i, "td", test18array[i], "test18-d"+i);
				}
			}
		</script>
```

### Example 5:

**Example HTTP GET request**

```
		<!--
			Example 21 - HTTP Requests
		// BXHttpGet(url, successFunction) returns JSON object or array-->

		<p><b>Test 21 HTTP GET (Returns JSON): </b></p>
		<div id="test21">
		 Click the button to try!
		</div>
		<button id="runtest21">Run test</button>

		<script>	
			// Add eventlistener for run button
			BXAddEventListener("runtest21", "click", function() {

				// Get our JSON Object and handle response
				BXHttpGet("https://jsonplaceholder.typicode.com/posts/1", function(response){
				// Log response to console
				console.log(response);
				// Create heading and paragraph for response
				BXCreateElement("test21", "h3", response.title, "test21-heading");
				BXCreateElement("test21", "p", response.body, "test21-body");
				});
			});

		</script>
```

##### Read more in examples.html