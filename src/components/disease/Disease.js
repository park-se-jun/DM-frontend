import "./disease.css";
import React, {useState} from 'react'

export default function Disease() {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    const [btn5, setBtn5] = useState(false);
    const [btn6, setBtn6] = useState(false);
    const [btn7, setBtn7] = useState(false);
    const [btn8, setBtn8] = useState(false);
    const [btn9, setBtn9] = useState(false);
    const [btn10, setBtn10] = useState(false);
    const [btn11, setBtn11] = useState(false);
    const [btn12, setBtn12] = useState(false);
    
    const [counter, setCounter] = useState(0);
    const [change, setChange] = useState(0);
    const [rank1, setRank1] = useState([0, ""]);
    const [rank2, setRank2] = useState([0, ""]);
    const [rank3, setRank3] = useState([0, ""]);
    const [rank4, setRank4] = useState([0, ""]);
    const [rank5, setRank5] = useState([0, ""]);
    const [rank6, setRank6] = useState([0, ""]);
    const [rank7, setRank7] = useState([0, ""]);
    const [rank8, setRank8] = useState([0, ""]);
    const [rank9, setRank9] = useState([0, ""]);
    const [rank10, setRank10] = useState([0, ""]);
    const [rank11, setRank11] = useState([0, ""]);
    const [rank12, setRank12] = useState([0, ""]);

    const [tag, setTag] = useState([]);

    let tagDisease = [];
    const buttonOnClick = (id) => {
        if (id === 1) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank1([id, "first"]);
                    setBtn1(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#두통"]);

                } else if (counter === 1) {
                    setRank1([id, "second"])
                    setBtn1(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#두통"]);
                } else if (counter === 2) {
                    setRank1([id, "third"])
                    setBtn1(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#두통"]);
                } else if (counter === 3) {
                    setRank1([id ,"four"])
                    setBtn1(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#두통"]);
                } else if (counter === 4) {
                    setRank1([id, "five"])
                    setBtn1(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#두통"]);
                }
            }
        } else if (id === 2) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank2([id, "first"]);
                    setBtn2(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#암"]);
                } else if (counter === 1) {
                    setRank2([id, "second"]);
                    setBtn2(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#암"]);
                } else if (counter === 2) {
                    setRank2([id, "third"]);
                    setBtn2(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#암"]);
                } else if (counter === 3) {
                    setRank2([id, "four"]);
                    setBtn2(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#암"]);
                } else if (counter === 4) {
                    setRank2([id, "five"]);
                    setBtn2(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#암"]);
                }
            }
        } else if (id === 3) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank3([id, "first"]);
                    setBtn3(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상3"]);
                } else if (counter === 1) {
                    setRank3([id, "second"]);
                    setBtn3(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상3"]);
                } else if (counter === 2) {
                    setRank3([id, "third"]);
                    setBtn3(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상3"]);
                } else if (counter === 3) {
                    setRank3([id, "four"]);
                    setBtn3(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상3"]);
                } else if (counter === 4) {
                    setRank3([id, "five"]);
                    setBtn3(true);
                    setCounter(counter+1); 
                    setTag((tag) => [...tag, "#증상3"]);
                }
            }
        } else if (id === 4) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank4([id, "first"]);
                    setBtn4(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상4"]);
                } else if (counter === 1) {
                    setRank4([id, "second"]);
                    setBtn4(true);
                    setCounter(counter+1);
                } else if (counter === 2) {
                    setRank4([id, "third"]);
                    setTag((tag) => [...tag, "#증상4"]);
                    setBtn4(true);
                    setCounter(counter+1);
                } else if (counter === 3) {
                    setRank4([id, "four"]);
                    setBtn4(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상4"]);
                } else if (counter === 4) {
                    setRank4([id, "five"]);
                    setBtn4(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상4"]);
                }
            }
        } else if (id === 5) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank5([id, "first"]);
                    setBtn5(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상5"]);
                } else if (counter === 1) {
                    setRank5([id, "second"]);
                    setBtn5(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상5"]);
                } else if (counter === 2) {
                    setRank5([id, "third"]);
                    setBtn5(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상5"]);
                } else if (counter === 3) {
                    setRank5([id, "four"]);
                    setBtn5(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상5"]);
                } else if (counter === 4) {
                    setRank5([id, "five"]);
                    setBtn5(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상5"]);
                }
            }
        } else if (id === 6) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank6([id, "first"]);
                    setBtn6(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상6"]);
                } else if (counter === 1) {
                    setRank6([id, "second"]);
                    setBtn6(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상6"]);
                } else if (counter === 2) {
                    setRank6([id, "third"]);
                    setBtn6(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상6"]);
                } else if (counter === 3) {
                    setRank6([id, "four"]);
                    setBtn6(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상6"]);
                } else if (counter === 4) {
                    setRank6([id, "five"]);
                    setBtn6(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상6"]);
                }
            }
        } else if (id === 7) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank7([id, "first"]);
                    setBtn7(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상7"]);
                } else if (counter === 1) {
                    setRank7([id, "second"])
                    setBtn7(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상7"]);
                } else if (counter === 2) {
                    setRank7([id, "third"])
                    setBtn7(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상7"]);
                } else if (counter === 3) {
                    setRank7([id ,"four"])
                    setBtn7(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상7"]);
                } else if (counter === 4) {
                    setRank7([id, "five"])
                    setBtn7(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상7"]);
                }
            }
        } else if (id === 8) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank8([id, "first"]);
                    setBtn8(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상8"]);
                } else if (counter === 1) {
                    setRank8([id, "second"]);
                    setBtn8(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상8"]);
                } else if (counter === 2) {
                    setRank8([id, "third"]);
                    setBtn8(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상8"]);
                } else if (counter === 3) {
                    setRank8([id, "four"]);
                    setBtn8(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상8"]);
                } else if (counter === 4) {
                    setRank8([id, "five"]);
                    setBtn8(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상8"]);
                }
            }
        } else if (id === 9) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank9([id, "first"]);
                    setBtn9(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상9"]);
                } else if (counter === 1) {
                    setRank9([id, "second"]);
                    setBtn9(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상9"]);
                } else if (counter === 2) {
                    setRank9([id, "third"]);
                    setBtn9(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상9"]);
                } else if (counter === 3) {
                    setRank9([id, "four"]);
                    setBtn9(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상9"]);
                } else if (counter === 4) {
                    setRank9([id, "five"]);
                    setBtn9(true);
                    setCounter(counter+1); 
                    setTag((tag) => [...tag, "#증상9"]);
                }
            }
        } else if (id === 10) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank10([id, "first"]);
                    setBtn10(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상10"]);
                } else if (counter === 1) {
                    setRank10([id, "second"]);
                    setBtn10(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상10"]);
                } else if (counter === 2) {
                    setRank10([id, "third"]);
                    setBtn10(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상10"]);
                } else if (counter === 3) {
                    setRank10([id, "four"]);
                    setBtn10(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상10"]);
                } else if (counter === 4) {
                    setRank10([id, "five"]);
                    setBtn10(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상10"]);
                }
            }
        } else if (id === 11) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank11([id, "first"]);
                    setBtn11(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상11"]);
                } else if (counter === 1) {
                    setRank11([id, "second"]);
                    setBtn11(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상11"]);
                } else if (counter === 2) {
                    setRank11([id, "third"]);
                    setBtn11(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상11"]);
                } else if (counter === 3) {
                    setRank11([id, "four"]);
                    setBtn11(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상11"]);
                } else if (counter === 4) {
                    setRank11([id, "five"]);
                    setBtn11(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상11"]);
                }
            }
        } else if (id === 12) {
            if (counter > 5) {
                setCounter(0);
            } else {
                if (counter === 0) {
                    setRank12([id, "first"]);
                    setBtn12(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상12"]);
                } else if (counter === 1) {
                    setRank12([id, "second"]);
                    setBtn12(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상12"]);
                } else if (counter === 2) {
                    setRank12([id, "third"]);
                    setBtn12(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상12"]);
                } else if (counter === 3) {
                    setRank12([id, "four"]);
                    setBtn12(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상12"]);
                } else if (counter === 4) {
                    setRank12([id, "five"]);
                    setBtn12(true);
                    setCounter(counter+1);
                    setTag((tag) => [...tag, "#증상12"]);
                }
            }
        }
    };

    const colorChange1 = () => {
        if (rank1[0] === 1 && rank1[1] === "first") {
            console.log(rank1[1]);
            return "button_select1";
        } else if (rank1[0] === 1 && rank1[1] === "second") {
            return "button_select2";
        } else if (rank1[0] === 1 && rank1[1] === "third") {
            return "button_select3";
        } else if (rank1[0] === 1 && rank1[1] === "four") {
            return "button_select4";
        } else if (rank1[0] === 1 && rank1[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange2 = () => {
        if (rank2[0] === 2 && rank2[1] === "first") {
            return "button_select1";
        } else if (rank2[0] === 2 && rank2[1] === "second") {
            return "button_select2";
        } else if (rank2[0] === 2 && rank2[1] === "third") {
            return "button_select3";
        } else if (rank2[0] === 2 && rank2[1] === "four") {
            return "button_select4";
        } else if (rank2[0] === 2 && rank2[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange3 = () => {
        if (rank3[0] === 3 && rank3[1] === "first") {
            return "button_select1";
        } else if (rank3[0] === 3 && rank3[1] === "second") {
            return "button_select2";
        } else if (rank3[0] === 3 && rank3[1] === "third") {
            return "button_select3";
        } else if (rank3[0] === 3 && rank3[1] === "four") {
            return "button_select4";
        } else if (rank3[0] === 3 && rank3[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange4 = () => {
        if (rank4[0] === 4 && rank4[1] === "first") {
            return "button_select1";
        } else if (rank4[0] === 4 && rank4[1] === "second") {
            return "button_select2";
        } else if (rank4[0] === 4 && rank4[1] === "third") {
            return "button_select3";
        } else if (rank4[0] === 4 && rank4[1] === "four") {
            return "button_select4";
        } else if (rank4[0] === 4 && rank4[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange5 = () => {
        if (rank5[0] === 5 && rank5[1] === "first") {
            return "button_select1";
        } else if (rank5[0] === 5 && rank5[1] === "second") {
            return "button_select2";
        } else if (rank5[0] === 5 && rank5[1] === "third") {
            return "button_select3";
        } else if (rank5[0] === 5 && rank5[1] === "four") {
            return "button_select4";
        } else if (rank5[0] === 5 && rank5[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange6 = () => {
        if (rank6[0] === 6 && rank6[1] === "first") {
            return "button_select1";
        } else if (rank6[0] === 6 && rank6[1] === "second") {
            return "button_select2";
        } else if (rank6[0] === 6 && rank6[1] === "third") {
            return "button_select3";
        } else if (rank6[0] === 6 && rank6[1] === "four") {
            return "button_select4";
        } else if (rank6[0] === 6 && rank6[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange7 = () => {
        if (rank7[0] === 7 && rank7[1] === "first") {
            return "button_select1";
        } else if (rank7[0] === 7 && rank7[1] === "second") {
            return "button_selec2";
        } else if (rank7[0] === 7 && rank7[1] === "third") {
            return "button_select3";
        } else if (rank7[0] === 7 && rank7[1] === "four") {
            return "button_select4";
        } else if (rank7[0] === 7 && rank7[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange8 = () => {
        if (rank8[0] === 8 && rank8[1] === "first") {
            return "button_select1";
        } else if (rank8[0] === 8 && rank8[1] === "second") {
            return "button_select2";
        } else if (rank8[0] === 8 && rank8[1] === "third") {
            return "button_select3";
        } else if (rank8[0] === 8 && rank8[1] === "four") {
            return "button_select4";
        } else if (rank8[0] === 8 && rank8[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange9 = () => {
        if (rank9[0] === 9 && rank9[1] === "first") {
            return "button_select1";
        } else if (rank9[0] === 9 && rank9[1] === "second") {
            return "button_select2";
        } else if (rank9[0] === 9 && rank9[1] === "third") {
            return "button_select3";
        } else if (rank9[0] === 9 && rank9[1] === "four") {
            return "button_select4";
        } else if (rank9[0] === 9 && rank9[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange10 = () => {
        if (rank10[0] === 10 && rank10[1] === "first") {
            return "button_select1";
        } else if (rank10[0] === 10 && rank10[1] === "second") {
            return "button_select2";
        } else if (rank10[0] === 10 && rank10[1] === "third") {
            return "button_select3";
        } else if (rank10[0] === 10 && rank10[1] === "four") {
            return "button_select4";
        } else if (rank10[0] === 10 && rank10[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange11 = () => {
        if (rank11[0] === 11 && rank11[1] === "first") {
            return "button_select1";
        } else if (rank11[0] === 11 && rank11[1] === "second") {
            return "button_select2";
        } else if (rank11[0] === 11 && rank11[1] === "third") {
            return "button_select3";
        } else if (rank11[0] === 11 && rank11[1] === "four") {
            return "button_select4";
        } else if (rank11[0] === 11 && rank11[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange12 = () => {
        if (rank12[0] === 12 && rank12[1] === "first") {
            return "button_select1";
        } else if (rank12[0] === 12 && rank12[1] === "second") {
            return "button_select2";
        } else if (rank12[0] === 12 && rank12[1] === "third") {
            return "button_select3";
        } else if (rank12[0] === 12 && rank12[1] === "four") {
            return "button_select4";
        } else if (rank12[0] === 12 && rank12[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    
  

    return (
        <div>
            <div className="button_container">
                <button onClick={() => buttonOnClick(1)} className={ colorChange1()}>증상</button>
                <button onClick={() => buttonOnClick(2)} className={ colorChange2()}>증상</button>
                <button onClick={() => buttonOnClick(3)} className={ colorChange3()}>증상</button>
                <button onClick={() => buttonOnClick(4)} className={ colorChange4()}>증상</button>
                <button onClick={() => buttonOnClick(5)} className={ colorChange5()}>증상</button>
                <button onClick={() => buttonOnClick(6)} className={ colorChange6()}>증상</button>

                <button onClick={() => buttonOnClick(7)} className={ colorChange7()}>증상</button>
                <button onClick={() => buttonOnClick(8)} className={ colorChange8()}>증상</button>
                <button onClick={() => buttonOnClick(9)} className={ colorChange9()}>증상</button>
                <button onClick={() => buttonOnClick(10)} className={ colorChange10()}>증상</button>
                <button onClick={() => buttonOnClick(11)} className={ colorChange11()}>증상</button>
                <button onClick={() => buttonOnClick(12)} className={ colorChange12()}>증상</button>
            </div>
            <div className="search_container">
                <button className="search_button">검색</button>
            </div>

            <div>
                {tag}
            </div>
            <div>
                <h5>작성한 타이틀</h5>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
            </div>
        </div>
    );
};
