import { useDispatch } from "react-redux";
import { increment } from "../data/slices/CounterSlice";

export const IncrementButton = () => {
    const dispatch = useDispatch();

    console.log('IncrementButton rendered');

    return (
        <button onClick={() => dispatch(increment())} >Increment</button>
    );
};
