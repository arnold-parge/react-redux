import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../data/store/AppStore";
import { setLastName } from "../data/slices/UserSlice";

export const LastNameInput = () => {
    const dispatch = useDispatch();
    const lastName = useSelector((state: RootState) => state.name.lastName);
    console.log('Last name rendered');
    return (
        <input
            type="text"
            name="name"
            id="name"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => dispatch(setLastName(e.target.value))}
        />
    );
};
