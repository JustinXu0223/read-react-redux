/**
 * @component Counter
 * @description 子组件
 * @time 2018/1/15
 * @author jokerXu
 **/
import React from 'react';

const Counter= ({ caption, initValue })=> {
    return (
        <div>
            {caption}, {initValue}
        </div>
    );
};

export default Counter;



