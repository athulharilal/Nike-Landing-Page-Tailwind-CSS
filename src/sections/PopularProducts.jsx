import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container
    max-sm:mt-12 
    "
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold ">
          Our
          <span className="text-coral-red"> Popular Products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Step into a realm of unparalleled quality and style with our coveted
          Nike shoe collection. Elevate your journey with footwear that
          seamlessly combines comfort, cutting-edge design, and unbeatable
          value. Explore the epitome of athletic excellence, where every step is
          a statement in fashion and performance. Discover the Nike experience –
          where quality meets style in every stride.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
