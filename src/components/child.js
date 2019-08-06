import React, {useEffect} from 'react';

const Child = ({forwardedRef, value, handleChange}) => {
    useEffect(() => {
        console.log(forwardedRef.current, 'Child Component')
    })

    return(
        <>
            <p ref={forwardedRef}>{value}</p>
            <div
                onClick={() => {
                    handleChange('red')
                }}>
                color change
            </div>
        </>
    )
}

export default Child