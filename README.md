# SARVRISE FOUNDATION Website

A responsive multi-page NGO/foundation website inspired by the clean structure and editorial feel of the reference website shared by the client, but with an original visual identity, copy and color palette.

## Pages
- `index.html` — Home
- `about.html` — About + Vision + Mission
- `programs.html` — Mission / Programs
- `volunteer.html` — Volunteer form
- `donate.html` — Donation page
- `contact.html` — Contact form
- `styles.css` — All design and responsive styling
- `script.js` — Mobile menu + demo form behavior

## Open in VS Code
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Open `index.html`.
4. Recommended: install the VS Code extension **Live Server**.
5. Right-click `index.html` → **Open with Live Server**.
6. The website will open in your browser.

You can also double-click `index.html`, but Live Server is better while editing.

## Important: first changes to make
Search and replace these placeholders:
- `hello@sarvrisefoundation.org`
- ` +91 6395059847`
- `your-upi@bank`
- `XXXX XXXX XXXX`
- `XXXXX0000000`
- `India`
- QR placeholder in `donate.html`

## Change foundation name
The name appears in every HTML page. In VS Code press:
- Windows: `Ctrl + Shift + H`
- Mac: `Cmd + Shift + H`
Then replace `SARVRISE FOUNDATION` with your preferred wording.

## Change colors
Open `styles.css` and edit the variables at the top:
- `--ink` = main dark green
- `--accent` = coral/orange
- `--accent2` = warm gold
- `--cream` = light background
- `--sage` = soft green section

## Change images
The demo uses remote Unsplash images. Search `images.unsplash.com` in `styles.css` and replace the URL with your own image URL.

For local images:
1. Put your image inside `assets/`, e.g. `assets/children.jpg`
2. In CSS use:
   `background-image:url("assets/children.jpg");`

## Change text
All text is directly inside the HTML files. Open the page you want and edit the wording.

## Forms
The volunteer/contact forms are front-end demo forms. They do NOT automatically send email.
Before publishing, connect them to:
- Formspree
- Google Forms
- Firebase
- Supabase
- Your own PHP/Node.js backend

## Donation
Do not publish the placeholder payment details. Replace them with your official verified foundation donation information and your actual QR code.

## Design note
The reference site was used only as a design/structure reference. This implementation has original copy, branding, colors and layout details for SARVRISE FOUNDATION.
