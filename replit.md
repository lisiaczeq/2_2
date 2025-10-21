# Repl.it Demo Project

## Overview
This is a simple static HTML/JavaScript project that demonstrates basic DOM manipulation and API fetching. The project includes buttons that trigger various actions, with one example button that fetches data from JSONPlaceholder API.

## Project Structure
- `index.html` - Main HTML file with button elements
- `script.js` - JavaScript file containing event listeners and fetch logic
- `style.css` - CSS styling file
- `server.js` - Simple Node.js HTTP server for serving static files

## Current State
The project is running on port 5000 with a Node.js HTTP server that serves static files. The server includes cache control headers to prevent caching issues during development.

## Features
- Example button that fetches posts from JSONPlaceholder API
- Three placeholder buttons (cw1, cw2, cw3) with TODO comments for future implementation
- Response data displayed in JSON format in the answer div

## Recent Changes (October 21, 2025)
- Set up Replit environment for the imported GitHub project
- Created Node.js HTTP server to serve static files on port 5000
- Linked CSS file to HTML
- Configured workflow to run the server
- Added cache control headers to prevent browser caching

## Architecture
This is a simple client-side application with:
- Static HTML/CSS/JS files
- Node.js server for local development
- No backend API (uses external JSONPlaceholder API for demonstration)
