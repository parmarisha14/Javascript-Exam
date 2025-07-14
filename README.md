Live Project ::https://javascript-exam-kohl.vercel.app/


<img width="1896" height="898" alt="Screenshot 2025-07-14 180531" src="https://github.com/user-attachments/assets/c2ec1795-eaa1-42cb-8931-12d01a9fbf26" />

<img width="1898" height="825" alt="Screenshot 2025-07-14 180618" src="https://github.com/user-attachments/assets/6479ff0a-3a22-4332-be99-1f4e62e83758" />


📄 Project Documentation: Product Management Web Application

📌 Project Overview

This project is a simple Product Management Web Application built using HTML, Bootstrap CSS, and JavaScript. Users can add, view, edit, and delete product entries, which are saved in the browser's localStorage.


🧱 Technologies Used

HTML5: Page structure and form layout

CSS3 (via Bootstrap): Styling and responsive layout

JavaScript (Vanilla): Logic for adding/editing/deleting products

localStorage API: For persistent data storage in the browser

📂 File Structure

├── index.html      # Frontend UI
├── script.js       # Logic and functionality
└── CSS/
    └── style.css   # Custom styles (referenced but not provided)
🖼️ UI Components (from index.html)

1. Navigation Bar
Includes links to Home, About, Contact Us

Search bar (no functionality tied to it)

2. Product Form
Fields:

Product Name

Price

Category

Image URL

Button: Submit (calls handleSubmit())

3. Product Table
Columns:

ID

Product Name

Price

Category

Image (thumbnail)

Action (Edit/Delete buttons)

⚙️ JavaScript Logic (from script.js)
🔹 user (object)
Stores temporary form input data.

🔹 items (array)
Holds all product objects. Data is retrieved from localStorage on page load.

🔹 handleSubmit()
If editing (editIndex !== null), update the product.

Else, add new product with a unique id (using Date.now()).

Reset the form.

Update localStorage.

Re-render the product table.

🔹 displayProductList()
Clears the table.

Iterates through items, and for each, appends a table row with:

Product details

"Edit" and "Delete" buttons

🔹 editProduct(id)
Finds the selected product by id

Fills the form with existing values

Sets editIndex to allow updating instead of creating new

🔹 deleteProduct(id)
Removes the product by id

Updates localStorage

Re-renders the table

🔹 Event Listeners
Each input element listens for input events and updates the user object.

💾 Data Persistence
Uses localStorage key: "items"

Stores array of product objects:

json
Copy
Edit
{
  "pnm": "Product Name",
  "price": "123",
  "category": "Electronics",
  "image": "https://...",
  "id": 1234567890
}
✅ Features Summary
Feature	Status
Add Product	✅
Edit Product	✅
Delete Product	✅
Display Products	✅
Persistent Data	✅
Responsive UI	✅

🚀 Suggestions for Improvement
Form Validation: Add numeric validation for price field.

Image Upload: Allow actual file upload instead of URL.

Search Functionality: Connect the navbar search to filter products.

Styling Enhancements: Add hover effects or alerts for actions.

Pagination: For handling a large list of products.
