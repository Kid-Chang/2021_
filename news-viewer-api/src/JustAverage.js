import React, { useState, useMemo, useRef, useCallback } from "react";

const getAverage = (numbers) => {
    console.log("평균값 계산중..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const JustAverage = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number)); //concat 배열끼리 합치기.!
        console.log(list);
        setList(nextList);
        setNumber("");
        inputEl.current.focus();
    }, [number, list]); // number 혹은 list 가 바뀌었을 때만 함수 생성.. !!!! onInsert함수는 number와 list 값을 새롭게 받아서 함수를 처리한다. 변수에 의존하는 (의존성?)함수라고 생각하자.

    //통상적으로 숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를. 함수를 재사용하려면 useCallback을...!

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default JustAverage;
