import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constant";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-[357px] relative mx-auto pt-28 pb-40 max-md:pb-32 max-md:pt-16 pricing-head_before">
            <h3 className="h3 max-lg:h4 max-md:h5 text-p4 text-center mb-14 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="border-[3px] z-4 w-[375px] border-s4/25 bg-s1/50 rounded-3xl flex p-2 max-w-xs mx-auto relative">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                monthly
              </button>

              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                annual
              </button>
              <div
                className={clsx(
                  "g4 pricing-head_btn_before overflow-hidden before:h-100 rounded-14 absolute left-2 top-2 w-[calc(50%-8px)] h-[calc(100%-16px)] shadow-500 transition-transform duration-500",
                  !monthly && "translate-x-full",
                )}
              ></div>
            </div>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* pricing sections */}
          <div className="relative z-2 flex max-xl:gap-5 -top-12 scroll-hide max-xl:scroll-auto items-start ">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even p-7 border-2 max-xl:min-w-80 max-lg:rounded-3xl"
              >
                {plan.title}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
