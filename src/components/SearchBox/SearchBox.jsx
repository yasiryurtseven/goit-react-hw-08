import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from  "../../redux/filters/slice";
import { selectNameFilter} from "../../redux/filters/selectors"
 

const SearchBox = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));
    }

    return (
        <div className={css.searchBox}>
        <label className={css.label} htmlFor="search">Find contacts by name</label>
        <input
            className={css.input}
            id="search"
            type="text"
            value={filterValue}
            onChange={handleChange}
        />
        </div>
        
        
        
    );
}
export default SearchBox;