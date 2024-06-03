import {  useEffect, useState } from "react";
import './docs.css'
const Docs = () => {

    const [data, setData] = useState<string[]>()
    const getTitle = async () => {
        await fetch('/docs')
            .then(response => response.json())
            .then(response => setData(response))
    }
    const getOrder = async (title: HTMLElement ) => {

        await fetch('/docs', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: title.innerHTML
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(response => setData(response))
    }
    useEffect(() => {
        getTitle();
    }, [])
    return (
        <>
            <div className="container">
                {!data ? 'Loading...' : data?.map((elem, i) => {
                    return (
                        <div className="order_title" key={i} onClick={(e) => getOrder(e.target as HTMLElement)}>
                            {elem}
                        </div>
                    )
                })
                }
            </div>
        </>
    );
}

export default Docs;