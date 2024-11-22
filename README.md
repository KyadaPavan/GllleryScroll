# Photo Gallery Application  

A responsive photo gallery application built using the Unsplash API. This project dynamically fetches images, supports infinite scrolling, and ensures a seamless experience across different screen sizes.

---

## 🚀 Features  

### Core Functionality  
1. **Photo Gallery Layout**  
   - Fetches photos from the Unsplash API.  
   - Displays them in a grid format with optional photographer captions.  

2. **Infinite Scrolling**  
   - Dynamically loads more photos as users scroll to the bottom of the page.  

3. **Responsive Design**  
   - Adjusts layout for different screen sizes:  
     - Small screens: 1-2 columns.  
     - Larger screens: 3-4 columns.  

4. **Error Handling**  
   - Displays an error message for API/network failures.  

5. **Loading Indicator**  
   - Shows a spinner or “Loading...” text while fetching images.  

---

## 🛠️ Technologies Used  

- **Framework**: React.js or Next.js  
- **Styling**: Pure CSS/SCSS  
- **API**: Unsplash API  

---

## 📋 Prerequisites  

1. **Unsplash API Key**  
   - Register on the [Unsplash Developers Platform](https://unsplash.com/developers).  
   - Obtain your API key and securely store it in your application.  

2. **Node.js and npm**  
   - Ensure you have Node.js installed.  

---

## 🔧 Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/<your-username>/photo-gallery-app.git  
   cd photo-gallery-app

2. Install dependencies:

    ```bash
    npm install
    
3. Set up the Unsplash API key:

  Create a .env.local file in the root of your project.
  Add the following environment variable: env REACT_APP_UNSPLASH_API_KEY=your_api_key_here  
  Start the application:

  ```bash
  npm start
 ```
  Open the application in your browser:
  ```bash
  http://localhost:3000  

```
🖼️ Screenshots
Desktop View: Multi-column layout for larger screens.
Mobile View: Compact layout with 1-2 columns for smaller screens.
Infinite Scroll: Automatically loads new images as you scroll.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

📧 Contact
For questions or feedback, feel free to reach out at your-email@example.com.


