import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import Select from 'react-select';

const options = [
    { value: 'KR', label: '한국' },
    { value: 'JP', label: '일본' },
    { value: 'US', label: '미국' },
    { value: 'CN', label: '중국' },
]

function SelectPage(){
    const [selectedOptionSingle, setSelectedOptionSingle] = useState();
    const [selectedOptionMulti, setSelectedOptionMulti] = useState();
    return (
        <Container className="pt-3">
            <h5>단일 선택 상자</h5>
            <Select
                value={selectedOptionSingle}
                onChange={(selectedOption) => {
                    console.log('Single Options Selected', selectedOption);
                    setSelectedOptionSingle(selectedOption);
                }}
                options={options}>
            </Select>

            <h5>다중 선택 상자</h5>
            <Select
                isMulti={true}
                isSearchable={true}
                value={selectedOptionMulti}
                placeholder="국가 선택..."
                onChange={(selectedOptions) => {
                    console.log('Multi Options Selected', selectedOptions);
                    setSelectedOptionMulti(selectedOptions);
                }}
                options={options}>
            </Select>
        </Container>
    );
}

export default SelectPage;