<!- 
	
	Blog Entry:
	My Safari Browser SQLite Database Hello World Example
	
	Author:
	Ben Nadel / Kinky Solutions
	
	Link:
	http://www.bennadel.com/index.cfm?event=blog.view&id=1940
	
	Date Posted:
	Jun 11, 2010 at 9:38 AM
	
-->


<!DOCTYPE HTML>
<html>
<head>
	<title>Safari SQLite Hello World Example</title>
	<script type="text/javascript" src="../../js/jquery-1.6.1.min.js"></script>
	<script type="text/javascript">
 
		// The first thing we want to do is create the local
		// database (if it doesn't exist) or open the connection
		// if it does exist. Let's define some options for our
		// test database.
		var databaseOptions = {
			fileName: "../sqlite_helloWorld",
			version: "1.0",
			displayName: "SQLite Hello World",
			maxSize: 2*1024*1024
		};
 
		// Now that we have our database properties defined, let's
		// creaete or open our database, getting a reference to the
		// generated connection.
		//
		// NOTE: This might throw errors, but we're not going to
		// worry about that for this Hello World example.
		var database = openDatabase(
			databaseOptions.fileName,
			databaseOptions.version,
			databaseOptions.displayName,
			databaseOptions.maxSize
		);
 
 
		// -------------------------------------------------- //
		// -------------------------------------------------- //
 
 
		// Now that we have the databse connection, let's create our
		// first table if it doesn't exist. According to Safari, all
		// queries must be part of a transaction. To execute a
		// transaction, we have to call the transaction() function
		// and pass it a callback that is, itself, passed a reference
		// to the transaction object.
		database.transaction(
			function( transaction ){
 
				// Create our girls table if it doesn't exist.
				transaction.executeSql(
					"CREATE TABLE IF NOT EXISTS girls (" +
						"id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
						"name TEXT NOT NULL" +
					");"
				);
 
			}
		);
 
 
		// -------------------------------------------------- //
		// -------------------------------------------------- //
 
 
		// Now that we have our database table created, let's
		// create some "service" functions that we can use to
		// touch the girls (no, not in that way - perv).
 
		// NOTE: Since SQLite database interactions are performed
		// asynchronously by default (it seems), we have to provide
		// callbacks to execute when the results are available.
 
 
		// I save a girl.
		var saveGirl = function( name, callback ){
			// Insert a new girl.
			database.transaction(
				function( transaction ){
 
					// Insert a new girl with the given values.
					transaction.executeSql(
						(
							"INSERT INTO girls (" +
								"name " +
							" ) VALUES ( " +
								"? " +
							");"
						),
						[
							name
						],
						function( transaction, results ){
							// Execute the success callback,
							// passing back the newly created ID.
							callback( results.insertId );
						}
					);
 
				}
			);
		};
 
 
		// I get all the girls.
		var getGirls = function( callback ){
			// Get all the girls.
			database.transaction(
				function( transaction ){
 
					// Get all the girls in the table.
					transaction.executeSql(
						(
							"SELECT " +
								"* " +
							"FROM " +
								"girls " +
							"ORDER BY " +
								"name ASC"
						),
						[],
						function( transaction, results ){
							// Return the girls results set.
							callback( results );
						}
					);
 
				}
			);
		};
 
 
		// I delete all the girls.
		var deleteGirls = function( callback ){
			// Get all the girls.
			database.transaction(
				function( transaction ){
 
					// Delete all the girls.
					transaction.executeSql(
						(
							"DELETE FROM " +
								"girls "
						),
						[],
						function(){
							// Execute the success callback.
							callback();
						}
					);
 
				}
			);
		};
 
 
		// -------------------------------------------------- //
		// -------------------------------------------------- //
 
 
		// When the DOM is ready, init the scripts.
		$(function(){
			// Get the form.
			var form = $( "form" );
 
			// Get the girl list.
			var list = $( "#girls" );
 
			// Get the Clear Girls link.
			var clearGirls = $( "#clearGirls" );
  
			// I refresh the girls list.
			var refreshGirls = function( results ){
				// Clear out the list of girls.
				list.empty();
 
				// Check to see if we have any results.
				if (!results){
					return;
				}
 
				// Loop over the current list of girls and add them
				// to the visual list.
				$.each(
					results.rows,
					function( rowIndex ){
						var row = results.rows.item( rowIndex );
 
						// Append the list item.
						list.append( "<li>" + row.name + "</li>" );
					}
				);
			};
 
 
			// Bind the form to save the girl.
			form.submit(
				function( event ){
					// Prevent the default submit.
					event.preventDefault();
 
					// Save the girl.
					saveGirl(
						form.find( "input.name" ).val(),
						function(){
							// Reset the form and focus the input.
							form.find( "input.name" )
								.val( "" )
								.focus()
							;
 
							// Refresh the girl list.
							getGirls( refreshGirls );
						}
					);
				}
			);
 
 
			// Bind to the clear girls link.
			clearGirls.click(
				function( event ){
					// Prevent default click.
					event.preventDefault();
 
					// Clear the girls
					deleteGirls( refreshGirls );
				}
			);
 
 
			// Refresh the girls list - this will pull the persisted
			// girl data out of the SQLite database and put it into
			// the UL element.
			getGirls( refreshGirls );
		});
 
	</script>
</head>
<body>
 
	<h1>
		Safari SQLite Hello World Example
	</h1>
	
	
 
	<form>
		Name:
		<input type="text" name="name" class="name" />
		<input type="submit" value="Add Girl" />
	</form>
 
	<h2>
		Girls
	</h2>
 
	<ul id="girls">
		<!-- To be populated dynamically from SQLite. -->
	</ul>
 
	<p>
		<a id="clearGirls" href="#">Clear Girls</a>!
	</p>
 
</body>
</html>