import React from "react";

import Button from "./../../UI/Button/Button";
import coverVID from "./../../assets/cover.mp4";
import classes from "./Hero.module.scss";

const HomePageContent = () => {
  return (
    <>
      {" "}
      <h1 className={classes.hero__content__title}>The tropics are waiting</h1>
      <span className={classes.hero__content__tagline}>
        Let us know when you're finished packing
      </span>
      <p className={classes.hero__content__description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laborum
        perferendis molestiae id doloribus cumque iste?
      </p>
      <div className={classes.hero__content_cta}>
        <Button to={"/booknow"}>Book Now</Button>
        <Button to={"/learnmore"} outline>
          Learn more
        </Button>
      </div>
    </>
  );
};

const Hero = ({ isDynamic, children }) => {
  return (
    <div className={classes.container}>
      <video
        autoPlay={true}
        muted
        loop
        className={classes.video}
        id={"video"}
        src={coverVID}
      ></video>
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          {!isDynamic && <HomePageContent />}
          {isDynamic && (
            <h1 className={classes.hero__content__title}>{children}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
