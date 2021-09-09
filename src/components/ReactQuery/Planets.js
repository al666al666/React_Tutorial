
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import RenderPlanet from './RenderPlanet';

const queryClient = new QueryClient();


const fetchPlanets = async (key, page) => {
    console.log(page) 
    const res = await fetch(`https://swapi.dev/api/planets/${page}/`);
    return res.json()

}
const Planets = () => {
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(['planets', page], fetchPlanets);

    console.log(data)
    return (
        <>
            <h2 className="has-text-centered is-size-2 has-text-weight-bold has-text-white"> This is Planets</h2>
            <div className="button is-justify-content-center">
                <button className="button is-outline is-danger is-small" onClick={() => setPage(1)}> Page 1 </button>
                <button className="button is-outline is-danger is-small" onClick={() => setPage(2)}> Page 2 </button>
                <button className="button is-outline is-danger is-small" onClick={() => setPage(3)}> Page 3 </button>
            </div>
            {status === "loading" && (
                <div>Loading data...</div>
            )}

            {status === "error" && (
                <div>Error Fetching data </div>
            )}

            {status === 'success' && (
                <div>
                    <RenderPlanet data={data}/> 
                </div>
            )}
        </>

    )
}

export default function Wrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <Planets />
        </QueryClientProvider>
    )
}


