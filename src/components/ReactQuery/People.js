import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import RenderPeople from './RenderPeople'; 

const queryClient = new QueryClient();
const url = "http://swapi.dev/api/people/ ";

const fetchPeople = async () => {
    try {
        const res = await fetch(url);
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

function People() {

    const { data, status } = useQuery('people', fetchPeople)
    console.log(data, status);
    return (
        <div>
            <h1 className="has-text-centered is-size-1 has-text-white has-text-weight-bold"> This is People</h1>


            {status === "loading" && (
                <div>Data is loading ... </div>
            )}

            {status ==="error" &&(
                <div> Data fetching has error</div>
            )}

            {status ==="success"&&(
                <div> {data.results.map(people=><RenderPeople key={people.name} people={people} />)}</div>
            )}
        </div>
    )
}


export default function Wrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <People />
        </QueryClientProvider>
    )
}


