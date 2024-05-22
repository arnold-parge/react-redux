import { useSelector } from "react-redux";
import { RootState } from "../data/store/AppStore";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    console.log('Counter rendered');
    return (
        <div className="counter">
            Count: {count}
        </div>
    );
};
