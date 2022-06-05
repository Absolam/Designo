import { Button } from "./Button";

export const GetInTouchModal = () => {
  return (
    <div className="get-in-touch-modal">
      <div className="get-in-touch-modal-text">
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <Button text="GET IN TOUCH" clName="get-in-touch-button" />
      </div>
    </div>
  );
};
