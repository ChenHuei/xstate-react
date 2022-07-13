import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

interface CounterContext {
  count: number;
}

const counterMachine = createMachine<CounterContext>({
  initial: "active",
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: { actions: assign({ count: (context) => context.count + 1 }) },
        DEC: { actions: assign({ count: (context) => context.count - 1 }) },
      },
    },
  },
});

const Counter = () => {
  const [state, send] = useMachine(counterMachine);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <span className="mb-4 text-2xl">{state.context.count}</span>
      <div className="space-x-4">
        <button
          className="p-2 border border-sky-500 rounded-md"
          onClick={() => send("INC")}
        >
          increment
        </button>
        <button
          className="p-2 border border-sky-500 rounded-md"
          onClick={() => send("DEC")}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
