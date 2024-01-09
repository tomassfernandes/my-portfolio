import Lottie from "lottie-react";
import animationData from "../assets/coding-animation.json";

export default function IntroSection() {
  return (
    <section>
      <div className="lottie-div">
        <Lottie className="lottie" animationData={animationData} loop={false} />
      </div>
      <div className="intro-div">
        <h1 className="heading-primary">Hi, I'm Tomás. Nice to meet you!</h1>
        <p>
          I'm a coding enthusiast, deeply engrossed in front-end development and
          fueled by a love for photo and video aesthetics. Despite earning a
          Bachelor's degree in Sports Science, I've pivoted to pursue a newfound
          passion in coding. As a self-taught learner, I navigate the coding
          landscape through online courses, showcasing my autonomy and
          problem-solving skills. Committed to continuous improvement, I bring a
          fresh perspective to development. Let's infuse creativity into code!
        </p>
      </div>
    </section>
  );
}
