import React from "react";

import Button from "./../../UI/Button/Button";
import coverVID from "./../../assets/cover.mp4";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.container}>
      <video
        muted
        loop
        className={classes.video}
        id={"video"}
        src={coverVID}
      ></video>
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          <h1 className={classes.fero__content__title}>
            The tropics are waiting
          </h1>
          <span className={classes.hero__content__tagline}>
            Let us know when you're finished packing
          </span>
          <p className={classes.hero__content__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            laborum perferendis molestiae id doloribus cumque iste?
          </p>
          <div className={classes.hero__content_cta}>
            <Button>Book Now</Button>
            <Button outline>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
