export default function addStyleSheet(query) {
  const styleSheet = `
    #cursor {
      text-decoration: none;
    }
    
    .hidden {
      visibility: hidden;
    }

    ${query} {
      display: inline;
    }
  `;

  const styleElement = document.createElement("style");
  styleElement.textContent = styleSheet;
  document.head.append(styleElement);
}
