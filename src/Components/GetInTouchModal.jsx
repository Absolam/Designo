import { Button } from "./Button";
import { Link } from "react-router-dom";

export const GetInTouchModal = () => {
  return (
    <div className="get-in-touch-modal">
      <div className="get-in-touch-modal-text">
        <div>
          <h2>Let's talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link to="/Designo/contact">
          <Button text="GET IN TOUCH" clName="get-in-touch-button" />
        </Link>
      </div>
    </div>
  );
};
