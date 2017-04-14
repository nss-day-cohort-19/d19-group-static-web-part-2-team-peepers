var productDisplay = document.getElementById("product-ID");

var liquidgold = [{
					name: "Liquid Gold",
					description:"Our flagship flavor. Say what you will, but you're the one with a dirty mind not us. Think of how a warm spring day feels, clear blue skies, children flying kites, and then a tsunami of molten gold destroying everything. Thats the intense kick in the face type of flavor we provide. No spring showers here.",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/liquidgold.jpeg"
				},
				{
					name: "Purple Rain",
					description:"The type of talent it takes to be able to feel confident enough to rock a purple crushed velvet suit, isn't near the talent level it took to make this. - Flavanoid scientist X34AF While it won't give you the skills of a musical god, drink enough of these and you may actually start seeing in an actual purple haze.",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/purplerain.jpeg"
				},
				{
					name: "Swamp Water",
					description:"This won't turn you into a mossy green monster with a tortured love life but, it may change the color of core bodily functions. Where others boast about kale or spinach in their green machinations, we may or may not just source our base for this drink from the local swamp. There might be healthy stuff in it.",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/swampwater.jpg"
				},
				{
					name: "Kidney Failure",
					description:"Warning: The name isn't just a joke, upon opening this bottle you transfer all responsibility for any adverse effects to you or others who ingest this liquid from Liquid Gold to yourself. It may seem unsafe to ingest something with a binding legal contract like that, but we promise the kidney transplants are worth it.",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/kidneyfailure(2).jpg"
				},
				{
					name: "Water",
					description:"We hate lawsuits, especially ones for false advertising so.... here you go, regular water. You're better off finding a spigot and hose to drink out of, we can almost guarantee it will be safer and of a higher quality. This may be sourced from multiple puddles filled with rainwater surrounding our bottling plant.",
					price:".99\xA2 ea.<br />6pack - $5.00<br />Case of 24 - $20.00",					url:"../img/water.jpeg"
				},
				{
					name: "T-2000 'and 1'",
					description:"Do you remember that movie with the cool looking cop who could change his body around and wanted to kill some kid? This drink is only 1/18th as dangerous as him. Now mercury free(pesky FDA). Only for internal consumption, rinse immediately if contact with skin occurs. Seek medical attention for any adverse reactions.",
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
