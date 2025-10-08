

import { useEffect, useState } from 'react';
import './style.css'

function Course() {

    const [data, setData] = useState([])

    useEffect(() => {

        async function get() {
            let response = await fetch('https://fastapi-course-app.onrender.com/categories/')
            let data = await response.json()

            setData(data)
        }
        get()

    }, [])

    console.log(data);


    return (
        <div className="container" >
            <h1>Kurslar</h1>

            <div className="courses">
                {
                    data?.map((kurs) => {
                        return (
                            <div key={kurs.id} className="course">
                                <img src={'https://fastapi-course-app.onrender.com' + kurs?.image} alt={kurs.name} />
                                <h3  >{kurs.name}</h3>
                                <p>{kurs.description}</p>
                                <button>Kursni ko'rish</button>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
}

export default Course;