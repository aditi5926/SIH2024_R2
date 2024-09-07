const buyers = [
     {
         name: "Alexander",
         location: "north",
         crop: "wheat",
         contact: "+111111111",
         image: "buyer1.jpg"
     },
     {
         name: "Prince",
         location: "south",
         crop: "rice",
         contact: "+222222222",
         image: "buyer2.jpg"
     },
     {
         name: "Sam",
         location: "east",
         crop: "corn",
         contact: "+333333333",
         image: "buyer3.jpg"
     },
     {
         name: "Chris",
         location: "west",
         crop: "vegetables",
         contact: "+444444444",
         image: "buyer4.jpg"
     }
 ];
 
 function filterBuyers() {
     const location = document.getElementById('location').value;
     const crop = document.getElementById('crop-type').value;
     const buyerListContainer = document.getElementById('buyer-list');
     const resultsSection = document.getElementById('results');
 
     // Clear the current list of buyers
     buyerListContainer.innerHTML = '';
 
     // Filter the buyers based on selected location and crop type
     const filteredBuyers = buyers.filter(buyer => {
         const locationMatch = location === 'all' || buyer.location === location;
         const cropMatch = crop === 'all' || buyer.crop === crop;
         return locationMatch && cropMatch;
     });
 
     // Display the filtered buyers
     if (filteredBuyers.length === 0) {
         buyerListContainer.innerHTML = '<p>No buyers found matching the criteria.</p>';
         resultsSection.style.display = 'block'; // Show the section even if no results
         return;
     }
 
     resultsSection.style.display = 'block'; // Show the section if buyers are found
     filteredBuyers.forEach(buyer => {
         const buyerCard = `
             <div class="buyer-card">
                 <img src="${buyer.image}" alt="${buyer.name}">
                 <div class="buyer-info">
                     <h3>${buyer.name}</h3>
                     <p>Location: ${buyer.location.charAt(0).toUpperCase() + buyer.location.slice(1)}</p>
                     <p>Interested in: ${buyer.crop.charAt(0).toUpperCase() + buyer.crop.slice(1)}</p>
                     <p>Contact: ${buyer.contact}</p>
                     <button>Contact</button>
                     <button>Create Contract</button>
                     <button>Negotiate Price</button>
                 </div>
             </div>
         `;
         buyerListContainer.innerHTML += buyerCard;
     });
 }
 