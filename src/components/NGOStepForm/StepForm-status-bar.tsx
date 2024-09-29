import { Progress } from "../ui/progress";

const StepFormStatusBar = (props: { step: number; maxSteps: number }) => {
  return (
    <div className="flex w-full items-center justify-between">
      {[...Array(props.maxSteps)].map((_, index) => (
        <>
          <div
            key={index}
            className={`flex h-8 w-8 min-w-8 items-center justify-center rounded-full text-base font-semibold ${
              props.step >= index
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            {index + 1}
          </div>
          {index !== props.maxSteps - 1 && (
            <Progress
              className="mx-4 h-1.5 w-full bg-gray-300"
              value={props.step > index ? 100 : props.step === index ? 50 : 0}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default StepFormStatusBar;
