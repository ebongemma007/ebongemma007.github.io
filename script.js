/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background: var(--bg-color);
  color: var(--text-color);
}

:root {
  --bg-color: #f4f4f4;
  --text-color: #333;
  --primary-color: #2980b9;
  --btn-bg-color: #e74c3c;
  --btn-bg-hover: #c0392b;
  --link-color: #2980b9;
}

/* Dark Mode Variables */
[data-theme="dark"] {
  --bg-color: #333;
  --text-color: #f4f4f4;
  --link-color: #8ac6d1;
  --btn-bg-color: #2c3e50;
  --btn-bg-hover: #1c2e40;
}

/* Header */
header {
  background: var(--primary-color);
  color: white;
  padding: 100px 0;
  text-align: center;
}

header h1 {
  font-size: 3em;
  margin-bottom: 10px;
}

header .btn {
  background: var(--btn-bg-color);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

header .btn:hover {
  background: var(--btn-bg-hover);
}

/* Navigation Bar */
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(41, 128, 185, 0.9);
  padding: 10px;
}

#navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

#navbar li {
  margin: 0 20px;
}

#navbar a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}

#navbar a:hover {
  text-decoration: underline;
}

/* About, Projects, Skills, Contact Sections - similar to earlier */
