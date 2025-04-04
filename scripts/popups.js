const popups = {
  newengland: `
    <div class="popup-header">
        <img src='assets/shields/new-england.png' class='popup-shield'>
        <h3>The New England Tribe</h3>
    </div>
    <p>Rooted in the earliest Puritan settlements, the New England Tribe maintains traditions of maritime trade, education, and local self-governance.</p>
    <ul>
        <li><strong>Territory:</strong> Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Eastern Connecticut, Upstate New York</li>
        <li><strong>Primary Ethnic Makeup:</strong> English, Irish, French, Italian, German</li>
        <li><strong>White Population:</strong> ~11.5 million</li>
        <li><strong>Christian Denominations:</strong> 27% Catholic, 23% Mainline Protestant, 18% Evangelical</li>
        <li><strong>Territory Area:</strong> ~115,000 sq mi (~6% of U.S. land area)</li>
        <li><strong>Cultural Traits:</strong> Maritime, Academic, Town-Meeting Tradition, Independent</li>
        <li><strong>Historical Notes:</strong> Founding heartland of early American colonial identity and the American Revolution. Expanded inland through migration and trade into Upstate New York.</li>
    </ul>
`,



newyork: `
    <div class="popup-header">
        <img src='assets/shields/new-york.png' class='popup-shield'>
        <h3>The Greater New York Tribe</h3>
    </div>
    <p>A Megalopolis centered on the great harbors and rivers of the Northeast.</p>
    <ul>
        <li><strong>Territory:</strong> New York City metro, Long Island, New Jersey, Delaware, Maryland, Eastern Pennsylvania, parts of Connecticut</li>
        <li><strong>Primary Ethnic Makeup:</strong> Italian, Irish, German, English</li>
        <li><strong>White Population:</strong> ~12 million</li>
        <li><strong>Christian Denominations:</strong> Predominantly Catholic and Mainline Protestant</li>
        <li><strong>Territory Area:</strong> ~90,000 sq mi (~5% of U.S. land area)</li>
        <li><strong>Cultural Traits:</strong> Commercial, Cosmopolitan, Industrial</li>
        <li><strong>Historical Notes:</strong> Major center of trade and immigration since the 19th century.</li>
    </ul>
`,

greatlakes: `
    <div class="popup-header">
        <img src='assets/shields/great-lakes.png' class='popup-shield'>
        <h3>The Great Lakes Tribe</h3>
    </div>
    <p>Centered on the inland seas of North America, the Great Lakes Tribe built its strength on trade, agriculture, and industry along the mighty waterways.</p>
    <ul>
        <li><strong>Territory:</strong> Western Pennsylvania, Ohio, Indiana, Illinois, Michigan, Wisconsin, Minnesota, Northern Missouri, Iowa</li>
        <li><strong>Primary Ethnic Makeup:</strong> German, Irish, Polish, English, Scandinavian</li>
        <li><strong>White Population:</strong> ~46 million</li>
        <li><strong>Christian Denominations:</strong> 33% Catholic, 31% Evangelical Protestant, 18% Mainline Protestant</li>
        <li><strong>Territory Area:</strong> ~500,000 sq mi (~14% of U.S. land area)</li>
        <li><strong>Cultural Traits:</strong> Industrial, Agricultural, Working-Class</li>
        <li><strong>Historical Notes:</strong> Shaped by waves of European immigration during the 19th and early 20th centuries.</li>
    </ul>
`,


dixieland: `
<div class="popup-header">
    <img src='assets/shields/dixieland.png' class='popup-shield'>
    <h3>The Dixieland Tribe</h3>
    <div style="margin-top: 5px; text-align: center;">
        <a href="https://dixiefirst.com" target="_blank" rel="noopener noreferrer" style="
            display: inline-block;
            background: radial-gradient(circle at 30% 30%, #a52a2a, #7b1e1e);
            color: #fdf6e3;
            padding: 8px 18px;
            border: 2px solid #5c1313;
            border-radius: 8px;
            text-decoration: none;
            font-family: Georgia, serif;
            font-weight: bold;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
            transition: all 0.3s ease;
            text-shadow: 1px 1px 0 #5c1313;
        "
        onmouseover="this.style.boxShadow='0 0 8px rgba(255, 215, 0, 0.85)';"
        onmouseout="this.style.boxShadow='0 0 5px rgba(0,0,0,0.5)';"
        >
            Visit the Dixieland Tribe Website
        </a>
    </div>
</div>

    <p>Dixieland preserves the culture of the old South, marked by aristocratic traditions, agriculture, and the memory of Cavalier forebears.</p>
    <ul>
        <li><strong>Territory:</strong> Virginia, West Virginia, North Carolina, South Carolina, Georgia, Alabama, Mississippi, Louisiana, Arkansas, Tennessee, Kentucky, Southern Missouri (including St. Louis and Kansas City), Northern Florida</li>
        <li><strong>Primary Ethnic Makeup:</strong> English, Scotch-Irish, Irish, French</li>
        <li><strong>White Population:</strong> ~39 million</li>
        <li><strong>Christian Denominations:</strong> 49% Evangelical, 18% Baptist (subset of Evangelical), 17% Mainline Protestant</li>
        <li><strong>Territory Area:</strong> ~540,000 sq mi (~22% of U.S. land area)</li>
        <li><strong>Cultural Traits:</strong> Agrarian, Cavalier, Traditional</li>
        <li><strong>Historical Notes:</strong> Shaped by English and Scotch-Irish settlement, and later known for the Confederate legacy and Cavalier aristocracy.</li>
    </ul>
`,

florida: `
<div class="popup-header">
    <img src='assets/shields/florida.png' class='popup-shield'>
    <h3>The Florida Tribe</h3>
</div>
<p>Florida, the subtropical edge of the Confederacy, is a land of marshes, citrus groves, and coastal towns.</p>
<ul>
    <li><strong>Territory:</strong> Central and South Florida</li>
    <li><strong>Primary Ethnic Makeup:</strong> English, Irish, German, Scottish</li>
    <li><strong>White Population:</strong> ~6.5 million</li>
    <li><strong>Christian Denominations:</strong> 27% Catholic, 22% Evangelical, 9% Mainline Protestant</li>
    <li><strong>Territory Area:</strong> ~5% (~95,000 sq mi)</li>
    <li><strong>Cultural Traits:</strong> Coastal, Subtropical, Independent</li>
    <li><strong>Historical Notes:</strong> Early settlement influenced by Spanish colonization and later English plantations.</li>
</ul>
`,


  texas: `
      <div class="popup-header">
          <img src='assets/shields/texas.png' class='popup-shield'>
          <h3>The Greater Texas Tribe</h3>
      </div>
      <p>Greater Texas is defined by cattlemen, oilmen, and settlers who tamed the plains and built a legacy of independence and wealth.</p>
      <ul>
          <li><strong>Territory:</strong> Texas, Oklahoma, parts of New Mexico</li>
          <li><strong>Primary Ethnic Makeup:</strong> English, German, Irish, Scottish</li>
          <li><strong>White Population:</strong> 14.8 million</li>
          <li><strong>Christian Denominations:</strong> 47% Evangelical, 26% Catholic, 15% Mainline Protestant</li>
          <li><strong>Territory Area:</strong> ~18% (~290,000 sq mi)</li>
          <li><strong>Cultural Traits:</strong> Frontier, Cavalier, Entrepreneurial</li>
          <li><strong>Historical Notes:</strong> Legacy of the Texas Revolution and independent republic roots.</li>
      </ul>
  `,

  greatplains: `
      <div class="popup-header">
          <img src='assets/shields/great-plains.png' class='popup-shield'>
          <h3>The Great Plains Tribe</h3>
      </div>
      <p>The Great Plains Tribe spreads across vast grasslands and prairies, marked by agrarian life and small-town communities.</p>
      <ul>
          <li><strong>Territory:</strong> Nebraska, Kansas, North Dakota, South Dakota, Wyoming, Colorado, parts of Montana</li>
          <li><strong>Primary Ethnic Makeup:</strong> German, Scandinavian, Irish, English</li>
          <li><strong>White Population:</strong> 10.9 million</li>
          <li><strong>Christian Denominations:</strong> 42% Evangelical, 28% Mainline Protestant, 15% Catholic</li>
          <li><strong>Territory Area:</strong> ~16% (~260,000 sq mi)</li>
          <li><strong>Cultural Traits:</strong> Agrarian, Frontier, Stoic</li>
          <li><strong>Historical Notes:</strong> Known for homesteaders and Scandinavian farming settlements.</li>
      </ul>
  `,

  deseret: `
      <div class="popup-header">
          <img src='assets/shields/deseret.png' class='popup-shield'>
          <h3>The Deseret Tribe</h3>
      </div>
      <p>Dominating the mountain and desert regions, Deseret is built on a legacy of religious pioneers and self-sufficiency.</p>
      <ul>
          <li><strong>Territory:</strong> Utah, Nevada, Arizona, parts of New Mexico, Eastern California (desert regions)</li>
          <li><strong>Primary Ethnic Makeup:</strong> English, Scandinavian, German, Scottish</li>
          <li><strong>White Population:</strong> 8.5 million</li>
          <li><strong>Christian Denominations:</strong> 53% Latter-Day Saints, 19% Evangelical, 15% Catholic</li>
          <li><strong>Territory Area:</strong> ~17% (~275,000 sq mi)</li>
          <li><strong>Cultural Traits:</strong> Religious, Isolated, Pioneer</li>
          <li><strong>Historical Notes:</strong> Founded by Mormon pioneers escaping persecution.</li>
      </ul>
  `,

  california: `
      <div class="popup-header">
          <img src='assets/shields/california.png' class='popup-shield'>
          <h3>The California Tribe</h3>
      </div>
      <p>The California Tribe represents the far western reaches of the Confederacy, where gold, ports, and orchards flourished under the western sun.</p>
      <ul>
          <li><strong>Territory:</strong> Coastal and Central California (Bay Area, Sacramento Valley, Central Valley, Los Angeles Basin), Hawaii</li>
          <li><strong>Primary Ethnic Makeup:</strong> English, German, Irish, Italian</li>
          <li><strong>White Population:</strong> 13.5 million</li>
          <li><strong>Christian Denominations:</strong> 31% Catholic, 29% Evangelical, 18% Mainline Protestant</li>
          <li><strong>Territory Area:</strong> ~9% (~145,000 sq mi)</li>
          <li><strong>Cultural Traits:</strong> Pioneer, Coastal, Mercantile</li>
          <li><strong>Historical Notes:</strong> Settled during the Gold Rush and the rise of Pacific trade.</li>
      </ul>
  `,

  northwest: `
      <div class="popup-header">
          <img src='assets/shields/northwest.png' class='popup-shield'>
          <h3>The Northwest Tribe</h3>
      </div>
      <p>The Northwest Tribe governs the rugged Pacific coastlines, dense forests, and misty mountains.</p>
      <ul>
          <li><strong>Territory:</strong> Oregon, Washington, Northern California, Idaho, parts of Montana</li>
          <li><strong>Primary Ethnic Makeup:</strong> German, English, Scandinavian, Irish</li>
          <li><strong>White Population:</strong> 14 million</li>
          <li><strong>Christian Denominations:</strong> 32% Evangelical, 21% Catholic, 18% Mainline Protestant</li>
          <li><strong>Territory Area:</strong> ~11% (~180,000 sq mi)</li>
          <li><strong>Cultural Traits:</strong> Maritime, Independent, Frontier</li>
          <li><strong>Historical Notes:</strong> Scandinavian and British pioneers defined the coastal settlements.</li>
      </ul>
  `,

  alaska: `
      <div class="popup-header">
          <img src='assets/shields/alaska.png' class='popup-shield'>
          <h3>The Alaska Tribe</h3>
      </div>
      <p>Alaska, the northern frontier, is marked by its remoteness, self-reliance, and command over wilderness and ice.</p>
      <ul>
          <li><strong>Territory:</strong> Alaska</li>
          <li><strong>Primary Ethnic Makeup:</strong> German, Irish, English, Scandinavian</li>
          <li><strong>White Population:</strong> 0.4 million</li>
          <li><strong>Christian Denominations:</strong> 37% Evangelical, 22% Catholic, 20% Mainline Protestant</li>
          <li><strong>Territory Area:</strong> ~7% (~120,000 sq mi)</li>
          <li><strong>Cultural Traits:</strong> Frontier, Rugged, Isolated</li>
          <li><strong>Historical Notes:</strong> Originally a Russian colony before American acquisition in 1867.</li>
      </ul>
  `,

  twelfth: `
      <div class="popup-header">
          <img src='assets/shields/twelfth.png' class='popup-shield'>
          <h3>The Twelfth Tribe</h3>
      </div>
      <p>The Twelfth Tribe serves as an elite supra-tribal order.</p>

  `
};

// Add hover glow
document.querySelectorAll('.shield').forEach(el => {
  el.addEventListener('mouseenter', () => {
      const tribe = el.dataset.tribe;
      const border = document.getElementById(`${tribe}-border`);
      if (border) border.classList.add('pulse');
  });

  el.addEventListener('mouseleave', () => {
      const tribe = el.dataset.tribe;
      const border = document.getElementById(`${tribe}-border`);
      if (border) border.classList.remove('pulse');
  });
});


// ----------------------------------
// Improved Popup + Border Glow Logic
// ----------------------------------

document.querySelectorAll('.shield').forEach(el => {
  el.addEventListener('click', () => {
      const tribe = el.dataset.tribe;
      document.getElementById('popup-text').innerHTML = popups[tribe] || "Unknown Tribe";
      document.getElementById('tribe-popup').classList.add('active');
      highlightBorder(tribe);
  });
});

// Close Popup via button
document.querySelector('.popup-close').addEventListener('click', () => {
  document.getElementById('tribe-popup').classList.remove('active');
  clearBorders();
});

// Close Popup via ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById('tribe-popup').classList.remove('active');
      clearBorders();
  }
});

// Border Glow Handler
function highlightBorder(tribe) {
  document.querySelectorAll('.border-overlay').forEach(el => {
      el.classList.remove('active', 'pulse');
  });
  const border = document.getElementById(`${tribe}-border`);
  if (border) {
      border.classList.add('active', 'pulse');
  }
}

// Border Reset Handler
function clearBorders() {
  document.querySelectorAll('.border-overlay').forEach(el => {
      el.classList.remove('active', 'pulse');
  });
}
