import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../data/store/AppStore";
import { setFirstName } from "../data/slices/UserSlice";

export const FirstNameInput = () => {
    const dispatch = useDispatch();
    const firstName = useSelector((state: RootState) => state.name.firstName);
    console.log('First name rendered');
    return (
        <input
            type="text"
            name="name"
            id="name"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(e) => dispatch(setFirstName(e.target.value))}
        />
    );
};
