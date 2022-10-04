import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearchResult } from "../actions";
import { FormInputSearch } from "../components/FormItems";

const SenderSearchBar = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const query = e.target.value;
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/get-multi`, {
        params: { query },
      })
      .then((resp) => dispatch(setSearchResult(resp.data.data)))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <FormInputSearch placeholder={"Search"} onChange={changeHandler} />
      <style jsx="true">{``}</style>
    </>
  );
};

export default SenderSearchBar;
