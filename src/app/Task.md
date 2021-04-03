# Nested Tables App

## Task Description:

Let's pretend this is a large application project, which will contain multiple nested tables. The size of nesting is not explicit and it may change anytime from 1 to 4 levels or even more.

**You have 2 main tasks**:

- The first task is to complete the login process, connect with the API and validated the user's credentials. If successful, navigate the user to the current-status page or provide error messaging to the user.

- The second task is to create a nested table. This table may display data as standard table and depending on the data, allow the table's rows to be expandable to view another table.

Current Status and Nested Data page must be hidden for non-authorised users.

Use the provided template and modified the specific pages to complete the task.

Fake database and a mock API endpoints has been provided for you, this can be found in the 'client' folder 'src/client'

All kind of free libraries are allowed to complete the task, for example: Angular Material.

## Login Page:

A Login component has been provided for you.

- Error messages must be provided and displayed to the user.

- Connect with API and use the [auth] API endpoint to take the user login data to validate the user credentials. Provide an error message if the user credentials are not found into the DB.

- Use [FormGroup] / [FormControl] for input fields and validations.

- The header component must not be visible.

## Current Status and Nested Data pages:

- Current-status and Nested-data need to display the provided data from the API. Use the [policies] and [policiesDetails] API endpoints to take the data.

- On [current-status] page display information as one layer table retrieved from the API. The table must contain the following columns - (num, amount and description).

- On [nested-data] page need to be displayed the same and additional data split on two different layers table(s). Connect and take the data from the API - use [getPolicies] and [getPoliciesDetails] API endpoints to retrieve the data or create a similar request.

- Table(s) must contain the following columns:

  - Layer 1: num, amount, description
  - Layer 2: clientName, amount

- The second layer must be hidden all the time until the user selects the row icon to expand the details. By expanding the details, correct and fresh data need to be retrieved from the API and displayed on the screen each time.

The details need to be provided as separated row attached to each record.

For more information check the images added to [Image] folder.

# Additional Tasks:

1. Adding Error Handler component and service. Error message needs to be displayed to the user with proper messages – In case there is no data into the table, or there is no connection with the server (404 and 500) errors.

2. Caching and reusing the income data. – Data need to be cached only for the current session.

These task can be done with Angular Interceptor.

# Bonus Tasks:

1. Improve application performance: Use Angular Resolver or a Route Guard to retrieve the data before loading the page.
2. Extended project styling.
3. Add some unit tests.

# Sending the task:

Before sending the task for review. Don`t forget to:

1. Check the project for any errors and Build errors.
2. Select and zip/rar all files without the node_modules folder.
