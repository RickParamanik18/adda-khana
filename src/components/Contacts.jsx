import { useSelector } from "react-redux";
import Contact from "./Contact";
import SenderSearchBar from "./SenderSearchBar";
import SenderTopBar from "./SenderTopBar";

const Contacts = (props) => {
  const searchResults = useSelector((state) => state.setSearchResult);
  // console.log(searchResults);
  return (
    <>
      <div className="contacts">
        <SenderTopBar pic={props.data?.pic} />
        <SenderSearchBar />
        <div className="list">
          {searchResults?.map((item, i) => {
            return <Contact key={i} details={item} />;
          })}
        </div>
      </div>
      <style jsx="true">{`
        .contacts {
          background: var(--smoke);
          padding: 10px;
          height: 100vh;
        }
        .list {
          padding-top: 18px;
        }
      `}</style>
    </>
  );
};

export default Contacts;
