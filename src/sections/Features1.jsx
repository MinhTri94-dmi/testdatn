import { Element } from "react-scroll";
import { details, features } from "../constant";
import Button from "../components/Button";

const Features1 = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 feature-after border-s3 max-md:flex-col max-md:gap-3 md:g7 rounded-7xl md:overflow-hidden max-md:border-none max-md:rounded-none">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="z-2 relative md:px-10 md:pb-10 flex-50 px-5 max-md:g7 max-md:border-2 max-md:border-s3 pb-5 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex flex-col justify-center items-center">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      alt="icon"
                      className="size-28 object-contain"
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:pb-6 max-md:h5">
                  {title}
                </h2>
                <p className="pb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            <ul className="relative w-full flex justify-around px-[5%] flex-grow items-center border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className=" mx-auto mb-3 size-20 flex justify-center items-center border-2 border-s3 rounded-full hover:border-s4 duration-500 transition-all shadow-500">
                    <img
                      src={icon}
                      alt="icon"
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3 className="relative max-w-36 mx-auto my-0 uppercase text-center base-small z-2">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features1;
