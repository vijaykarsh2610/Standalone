# Document Standalone Chatbot

## Steps to add Plugin in application 

1. **Standalone Chatbot javascript plugin script.**

2. **Subscription Key.**

3. **Custom Chatbot Theme script.**

---
 
### Step1. Standalone Chatbot javascript plugin script.

Here is the script that needs to be included inside the `<head>` section of your HTML file to ensure it runs when the HTML page loads.

```html
<script src="https://cdn.jsdelivr.net/gh/vijaykarsh2610/Standalone/AristChatbotlatest.js"></script>
```
### Step2. Adding Subscription key inside the head section.

To manage and store your subscription key efficiently, you'll need to add a script to the <head> section of your HTML file. This script will handle the subscription key you received from the Arist team, making it easy to use without needing to enter it repeatedly.

```html
<meta name="subscription-key" content="Replace-subscription-key-here">
```
**Note :** Replace-subscription-key with acutal subscription key received by arist team.

**Note: Our case please replace with ```Techment@123```.**


### Step3.(Optional) Custom Chatbot theme.

If you want to customize the look of your chatbot, you can add a script to the `<head>` section of your HTML file. This script allows you to change the theme by specifying your preferred colors. You can adjust the header's background color and text color to match your desired theme. Just replace the placeholder colors in the script with your chosen colors.

```html
<script>
        // Function to change the CSS variables
        function setChatbotHeaderColors(backgroundColor, textColor, fontFamily,iconUrl) {
            document.documentElement.style.setProperty('--header-background-color', backgroundColor);
            document.documentElement.style.setProperty('--header-text-color', textColor);
            document.documentElement.style.setProperty('--font-family', fontFamily);
            document.documentElement.setAttribute('data-icon-url', iconUrl); // Store icon URL in data attribute

        }

        // Call the function when the DOM is fully loaded
        setChatbotHeaderColors('#DA291C', '#FFFFFF','poppins',' https://cdn.jsdelivr.net/gh/vijaykarsh2610/Standalone/AristHeaderIcon.svg'); // Change to blue background with white text        
    </script>
```
Here `setChatbotHeaderColors('#DA291C', '#FFFFFF');` added default color of arist application. replace `#DA291C` with preferred background-color and `#FFFFFF` with preferred text-color.
