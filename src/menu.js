const menuItem1 = document.createElement("div");
const menuItem2 = document.createElement("div");
const menuItem3 = document.createElement("div");
const menuItem4 = document.createElement("div");
const menuItem5 = document.createElement("div");
const menuItem6 = document.createElement("div");
const menuItem7 = document.createElement("div");
const menuItem8 = document.createElement("div");
const menuItem9 = document.createElement("div");
const menuItem10 = document.createElement("div");
const menuItemBreakfast = document.createElement("div");
const menuItemLunch = document.createElement("div");
const menuItemDinner = document.createElement("div");
const breakfastSectionHeading = document.createElement("div");
const lunchSectionHeading = document.createElement("div");
const dinnerSectionHeading = document.createElement("div");
const content = document.getElementById("content");

const renderMenu = () => {
  breakfastSectionHeading.innerHTML = `<h1>Breakfast</h1>`;
  breakfastSectionHeading.setAttribute("id", "menuSection");
  content.appendChild(breakfastSectionHeading);

  menuItem1.innerHTML = `
  <h2>Protein-packed Omelette</h2>
   <p>
     Whip up an omelette using egg whites and add lean protein sources like
     diced chicken breast or turkey, along with veggies like spinach,
     mushrooms, and bell peppers.
   </p>`;
  menuItem2.innerHTML = `
  <h2>Greek Yogurt Parfait</h2>
   <p>
    Layer Greek yogurt with fresh berries, nuts, and a drizzle of honey.
    This creamy and fruity parfait is a great way to start your day with a
    protein boost.
   </p>`;
  menuItem3.innerHTML = `
  <h2>Protein Pancakes</h2>
   <p>
    Combine chickpeas, diced cucumbers, cherry tomatoes, red onions, and
    fresh herbs. Toss with lemon juice and olive oil for a refreshing and
    protein-rich salad.
   </p>`;

  menuItemBreakfast.setAttribute("id", "menuItem");
  menuItemBreakfast.appendChild(menuItem1);
  menuItemBreakfast.appendChild(menuItem2);
  menuItemBreakfast.appendChild(menuItem3);
  content.appendChild(menuItemBreakfast);

  lunchSectionHeading.innerHTML = `<h1>Lunch</h1>`;
  lunchSectionHeading.setAttribute("id", "menuSection");
  content.appendChild(lunchSectionHeading);

  menuItem4.innerHTML = `
  <h2>Grilled Chicken Salad</h2>
   <p>
      Grill a chicken breast and toss it with mixed greens, cherry tomatoes,
      cucumber slices, and a sprinkle of feta cheese. Drizzle with a light
      vinaigrette dressing for a delicious and nutritious lunch.
    </p>`;
  menuItem5.innerHTML = `
  <h2>Protein-packed Omelette</h2>
   <p>
     Whip up an omelette using egg whites and add lean protein sources like
     diced chicken breast or turkey, along with veggies like spinach,
     mushrooms, and bell peppers.
   </p>`;
  menuItem6.innerHTML = `
  <h2>Protein-packed Omelette</h2>
   <p>
     Whip up an omelette using egg whites and add lean protein sources like
     diced chicken breast or turkey, along with veggies like spinach,
     mushrooms, and bell peppers.
   </p>`;

  menuItemLunch.setAttribute("id", "menuItem");
  menuItemLunch.appendChild(menuItem4);
  menuItemLunch.appendChild(menuItem5);
  menuItemLunch.appendChild(menuItem6);
  content.appendChild(menuItemLunch);

  dinnerSectionHeading.innerHTML = `<h1>Dinner</h1>`;
  dinnerSectionHeading.setAttribute("id", "menuSection");
  content.appendChild(dinnerSectionHeading);
  menuItem7.innerHTML = `
  <h2>Baked Salmon with Quinoa</h2>
   <p>
    Season a salmon fillet with herbs and bake it to perfection. Serve it
    alongside a portion of fluffy quinoa and steamed broccoli for a
    well-rounded dinner that's rich in protein and omega-3 fatty acids.
  </p>`;
  menuItem8.innerHTML = `
  <h2>Tofu and Vegetable Stir-Fry</h2>
    <p>
      Blend together chocolate protein powder, frozen bananas, almond milk,
      and a spoonful of nut butter for a creamy and satisfying
      protein-packed dessert smoothie.
    </p>`;
  menuItem9.innerHTML = `
  <h2>Beef Stir-Fry</h2>
   <p>
     Layer Greek yogurt with fresh berries, nuts, and a drizzle of honey.
     This creamy and fruity parfait is a great way to start your day with a
     protein boost.
   </p>`;

  menuItemDinner.setAttribute("id", "menuItem");
  menuItemDinner.appendChild(menuItem7);
  menuItemDinner.appendChild(menuItem8);
  menuItemDinner.appendChild(menuItem9);
  content.appendChild(menuItemDinner);
};

export { renderMenu };
