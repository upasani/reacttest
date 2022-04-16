import { useEffect, useState } from "react"

export const Home = () => {
    const [getInfo, setInfo] = useState([]);
    useEffect(() => {
        getData();

    }, [])
    const getData = () => {
        fetch(`http://localhost:8080/city`)
            .then((res) => res.json())
            .then((res) => setInfo(res));
    }
    console.log(getInfo);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {getInfo.map((e) => (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.Name}</td>
                            <td>{e.city}</td>
                            <td>{e.population}</td>
                            <td><button>Edit</button></td>
                            <td><button>Edit</button></td>
                        </tr>

                    ))}
                </tbody>
                

            </table>
            <button
            onClick={()=>getInfo.sort((a,b)=>{
                return a.population-b.population;
            })}
            >SortAscending</button>

        </div>
    )
}