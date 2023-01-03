import goodsJSON from '../../../stub/goods.json'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const formAddRef = React.createRef()

export function Add(){
    useEffect(() => {

    }, [])

    const addGood = (event) => {
        event.preventDefault()
        const formData = new FormData(formAddRef.current)
        const title = formData.get('title')
        const discr = formData.get('discr')
        const price = formData.get('price')
        const count = formData.get('count')

        const navigate = useNavigate()

        const goodObject = {
            "ID": '',
            "TITLE": title,
            "DISCR": discr,
            "PRICE": price,
            "IMG": '',
            "COUNT": count,
        }

        goodsJSON.push(goodObject);
    }

    return (
    <form ref={formAddRef} encType="multipart/form-data">
        <input type='text' name="title" placeholder="Title" />
        <input type='text' name="discr" placeholder="Description" />
        <input type='text' name="price" placeholder="Price" />
        <input type='text' name="count" placeholder="Amount" />
        <input type='submit' onClick={(e) => addGood(e)} value="Add" />
    </form>
    )
}