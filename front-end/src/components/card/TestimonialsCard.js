import React from "react";

import customer1 from "../../assets/images/testimonials/customer_1.jpg";

export default function TestimonialsCard() {
  return (
    <div className=" m-auto p-4 border rounded-lg border-slate-900">
      <img className="m-auto" src={customer1} alt=""></img>
      <section>
        <h1 className="font-bold text-xl">Hannah Schmitt</h1>
        <article className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci
          lectus maecenas. Suspendisse
        </article>
        <span className="text-sm">May 8, 2020</span>
      </section>
    </div>
  );
}

// w-2/3 md:w-1/2
