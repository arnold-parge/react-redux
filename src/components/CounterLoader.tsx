import { useSelector } from "react-redux";
import { RootState } from "../data/store/AppStore";

export const CounterLoader = () => {
    const isLoading = useSelector((state: RootState) => state.counter.loading);
    return (
       <>
            {isLoading && <div>Loading...</div>}
        </>
    );
};
