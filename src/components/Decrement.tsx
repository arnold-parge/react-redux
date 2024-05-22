import { useDispatch } from "react-redux";
import { decrement } from "../data/slices/CounterSlice";
import { AppDispatch } from "../data/store/AppStore";

export const DecrementButton = () => {
    const dispatch = useDispatch<AppDispatch>();

    console.log('DecrementButton rendered');
    
    return (
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    );
};
