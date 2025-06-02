fetch('data.csv')
  .then(response => response.text())
  .then(csv => {
    Papa.parse(csv, {
      header: true,
      complete: function(results) {
        const catalog = document.getElementById('catalog');
        results.data.forEach(item => {
          if (item.name && item.image && item.price) {
            const div = document.createElement('div');
            div.className = 'item';
            div.innerHTML = `
              <img src="images/${item.image}" alt="${item.name}">
              <h2>${item.name}</h2>
              <p>€${parseFloat(item.price).toFixed(2)}</p>
            `;
            catalog.appendChild(div);
          }
        });
      }
    });
  });
