import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCheckAuth = () => {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(state);
    }, []);
};