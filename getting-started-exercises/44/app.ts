function makeSandwich(...items:any) {
  console.log("You have ordered a sandwich with the following items:");
  for (let i = 0; i < items.length; i++) {
    console.log("- " + items[i]);
  }
  console.log("Enjoy your sandwich!");
}

makeSandwich("chicken", "honey", "mayonnaise");
makeSandwich("ham", "cheese");
makeSandwich("peanut butter", "jelly");