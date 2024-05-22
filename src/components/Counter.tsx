import { useSelector } from "react-redux";
import { RootState } from "../data/store/AppStore";
import { DecrementButton } from "./Decrement";
import { IncrementButton } from "./Increment";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    console.log('Counter rendered');
    return (
        <>
            <div className="counter">
                Count: {count}
            </div>
            <IncrementButton />
            <DecrementButton />
        </>
    );
};
