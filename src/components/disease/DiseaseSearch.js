import "./disease.css";
import React, {useState} from 'react';
export default function DiseaseSearch ({tags}) {

    const [search, setSearch] = useState(false);

    const onClickSearch = () => {
        setSearch(true);
    }
    
    return (
        <div>
            <div className="search_container">
                <button onClick={onClickSearch} className="search_button">검색</button>
            </div>
            {search ? tags.map((disease) => disease) : null}
            {search ? (
                <div>
                    <h5>작성한 타이틀</h5>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                </div>
            ) : null}
        </div>
    );
}