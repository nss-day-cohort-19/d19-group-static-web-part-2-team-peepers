var productDisplay = document.getElementById("product-ID");

var liquidgold = [{
					name: "Liquid Gold",
					description:"Mooninites 'Taste our Liquid Gold'",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/liquidgold.jpeg"
				},
				{
					name: "Purple Rain",
					description:"The late great Prince",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/purplerain.jpeg"
				},
				{
					name: "Swamp Water",
					description:"This won't turn you into a mossy green monster with a tortured love life but...",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/swampwater.jpg"
				},
				{
					name: "Kidney Failure",
					description:"Warning: The name isn't just a joke, upon opening this bottle you transfer all responsibility for any adverse effects to you or others who ingest this liquid from Liquid Gold to yourself....",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/kidneyfailure.jpeg"
				},
				{
					name: "Water",
					description:"We hate lawsuits, especially ones for false advertising so.... here you go, regular water. You're better off finding a spigot and hose to drink out of, we can almost guarantee it will be safer and of a higher quality. This may be sourced from multiple puddles filled with rainwater surrounding our bottling plant.",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/water.jpeg"
				},
				{
					name: "T-2000 'and 1'",
					description:"Terminator",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/t2000.jpg"
				},
				{
					name: "Berries...?",
					description:"Supposedly red means berries, but we don't use real ingredients in our drinks. We scoff at the idea of 'Organic' or 'GMO free'; all of our ingredients are created in our state of the art flavor creation facility on the S.S. Flavanoid, voyaging infinetly through international waters",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/red.jpg"
				},
				{
					name: "Kitchen Sink",
					description:"All the colors of the rainbow in one bottle. We took all of our second batches and mixed them together and .... viola! The flavor is ever changing but the color is not. Don't let the viscosity and gritty feel turn you away, thats just the over 6,500 ingredients reacting with each other. We promise.... its safe for consumption.",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",
					url:"../img/black.jpg"
				}]



for (product in liquidgold) {
    var products = `<article class="products-js">
                    <img alt="product images" class="product-images"    src="${liquidgold[product].url}">
                    <p class="product-name">${liquidgold[product].name}</p>
                    <p class="product-description">${liquidgold[product].description}</p>
                    <p class="product-price">${liquidgold[product].price}</p>
                </article>`;
    productDisplay.innerHTML += products;
}
