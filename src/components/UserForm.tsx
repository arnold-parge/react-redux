import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName } from "../data/slices/UserSlice";
import { RootState } from "../data/store/AppStore";

export const UserForm = () => {
    const dispatch = useDispatch();
    const name = useSelector((state: RootState) => state.name);
    console.log('Name rendered');
    return (
        <>
            <input
                type="text"
                name="name"
                id="name"
                value={name.firstName}
                placeholder="Enter First Name"
                onChange={(e) => dispatch(setFirstName(e.target.value))}
            />
            <input
                type="text"
                name="name"
                id="name"
                value={name.lastName}
                placeholder="Enter Last Name"
                onChange={(e) => dispatch(setLastName(e.target.value))}
            />
        </>
    );
};
