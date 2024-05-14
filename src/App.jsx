import Img from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <section className="w-full h-full bg-orange-100 md:justify-center md:flex  md:items-center md:py-40">
      <div className="w-full h-full bg-white md:max-w-[45rem] md:p-6 p-0 md:rounded-3xl">
        <img src={Img} alt="Omelette" className="md:rounded-xl" />

        <div className="flex flex-col container m-auto md:py-5 p-5 gap-7 text-amber-950 text-opacity-60">
          <h1 className="text-4xl  text-black">Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="bg-fuchsia-50 p-5 rounded-xl">
            <h2 className="text-fuchsia-800 text-xl text-opacity-100">
              Preparation time
            </h2>
            <ul className="flex flex-col gap-3 pt-3">
              <li className="flex">
                <strong className="pe-2 text-amber-950">Total:</strong>
                Approximately 10 minutes
              </li>
              <li className="flex">
                <strong className="pe-2  text-amber-950">Preparation:</strong>5
                minutes
              </li>
              <li className="flex">
                <strong className="pe-2  text-amber-950">Cooking:</strong>5
                minutes
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-3 pt-3 border-b pb-8">
            <h2 className="text-amber-900 text-3xl pb-2">Ingredients</h2>
            <li>2-3 large eggs</li>
            <li>5 minutes</li>
            <li>Salt, to taste Pepper</li>
            <li>o taste 1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <ul className="flex flex-col gap-3 pt-3 border-b pb-8">
            <h2 className="text-amber-900 text-3xl pb-2">Instructions</h2>
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan:</strong> Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette:</strong> Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>

            <li>
              <strong>Add fillings (optional):</strong> When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong>Enjoy:</strong> Serve hot, with additional salt and pepper
              if needed.
            </li>
          </ul>
          <h2 className="text-amber-900 text-3xl">Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div>
            <ul className="flex flex-col">
              <li className="flex border-b pb-2 ">
                <p className="pe-14 ps-12 md:ps-10 md:pe-48">Calories</p>{" "}
                <strong>277kcal</strong>
              </li>
              <li className="flex border-b pb-2">
                <p className="pe-[4.5rem] ps-12 md:ps-10 md:pe-[13rem]">
                  Carbs{" "}
                </p>
                <strong>0g</strong>
              </li>
              <li className="flex border-b pb-2">
                <p className="pe-16 ps-12 md:ps-10 md:pe-[12.5rem]">Protein</p>{" "}
                <strong>20g</strong>
              </li>
              <li className="flex border-b pb-2 ">
                {" "}
                <p className="pe-[5.8rem] ps-12 md:ps-10 md:pe-[14.3rem]">
                  Fat
                </p>
                <strong>22g</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
