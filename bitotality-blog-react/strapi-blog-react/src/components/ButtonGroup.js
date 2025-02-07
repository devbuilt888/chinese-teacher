import React, { Fragment } from 'react';
import Button from './Button';

const ButtonGroup = ()=> {
    return (
        <Fragment>
            <p className='bs-component'>
            <Button color="info"/>
            <Button color="primary"/>
            <Button color="warning"/>
            <Button color="dark"/>
            <Button color="light"/>
            </p>
        </Fragment>
    )
}

export default ButtonGroup;