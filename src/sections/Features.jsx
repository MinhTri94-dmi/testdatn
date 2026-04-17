import { Element } from "react-scroll";
import { features } from "../constant";
import Button from "../components/Button";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 feature-after max-md:gap-3 border-s3 rounded-2xl max-md:flex-col max-md:border-none max-md:rounded-none">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 pb-5 px-5 flex-50 max-md:flex-320 max-md:g7 md:px-10 md:pb-10 max-md:border-2 max-md:border-s3 rounded-2xl "
              >
                <div className="w-full justify-start items-start flex">
                  <div className="mb-12 flex justify-center items-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      alt="icon"
                      className="size-28 object-contain"
                    />
                  </div>
                </div>

                <p className="caption max-md:pb-6 pb-5">{caption}</p>
                <h2 className="h3 mb-10">{title}</h2>
                <p className="body-1 mb-10">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
