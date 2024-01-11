import Lottie from "lottie-react";
import animationData from "../assets/coding-animation.json";

export default function IntroSection() {
  return (
    <section>
      <div className="lottie-div">
        <Lottie className="lottie" animationData={animationData} loop={false} />
      </div>
      <div id="intro-section" className="intro-div">
        <h1 className="heading-primary">Hi, I'm Tomás. Nice to meet you!</h1>
        <p>
          Passionate front-end developer with a keen eye for photo aesthetics.
          Bachelor's degree in Sports Science, now embarking on a coding
          journey. Self-taught and committed to continuous improvement, I bring
          autonomy and problem-solving skills to development. Excited to
          contribute and grow in a dynamic development environment, bringing
          freshness and dedication to your projects by giving me the opportunity
          to collaborate and learn. Let's create something amazing together!
        </p>
      </div>
    </section>
  );
}
