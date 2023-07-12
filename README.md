# Task 4: 


# Dynamic Data Table Web Page

The Dynamic Data Table web page is a client-side application that allows users to manage data in a table format. Users can add new rows of data, display a paginated view of the table, and remove rows from the table.

## Features

- **Add Data**: Users can enter a name and place in the input fields provided. Clicking the "Add" button will append a new row with the entered data to the table.

- **Display Data**: The table dynamically displays a paginated view of the data. By default, it shows five rows per page. Users can navigate between pages using the "Previous" and "Next" buttons.

- **Remove Data**: Each row in the table has a "Remove" button. Clicking the button removes the corresponding row from the table.

## How It Works

1. The web page initializes with a predefined set of data stored in the `data` array.

2. The `displayData` function is responsible for rendering the table. It calculates the range of data to display based on the current page and the number of items per page.

3. The `removeRow` function removes a row from the table by splicing the corresponding item from the `data` array. It then updates the pagination and re-renders the table.

4. The `addData` function reads the input values for name and place. If both values are provided, it appends a new row to the `data` array with the entered values. It then updates the pagination and re-renders the table.

5. The `previousPage` and `nextPage` functions handle the pagination navigation. They decrement or increment the `currentPage` variable and re-render the table accordingly.

6. The `updatePagination` function recalculates the total number of pages based on the current length of the `data` array and the number of items per page. If the current page exceeds the total number of pages, it adjusts the `currentPage` variable to the last page.

## Usage

1. Open the HTML file (`index.html`) in a web browser.

2. Enter a name and place in the input fields and click the "Add" button to add a new row to the table.

3. Navigate between pages using the "Previous" and "Next" buttons.

4. Click the "Remove" button on any row to remove it from the table.

## Customization

- To change the initial data, modify the `data` array with the desired values.

- To adjust the number of items per page, update the `itemsPerPage` variable.

- To modify the table layout or style, update the corresponding CSS styles.
  
