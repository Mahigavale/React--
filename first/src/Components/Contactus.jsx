import { cityconext, metrocontext, populationcontext } from "./Home"

function Contactus() //props=>props=>profile city=>city=>"Pune" {city}=> {pune}
{


    return (

        <>

            <h1>from the contact us page:</h1>
            <cityconext.Consumer>
                {
                    (city) => {
                        return (
                            <populationcontext.Consumer>
                                {
                                    (population) => {
                                        return (
                                            <metrocontext.Consumer>
                                                {
                                                    (metro) => {
                                                        return (<h1>{city}:{population}:{metro}</h1>)
                                                    }
                                                }
                                            </metrocontext.Consumer>
                                        )
                                    }
                                }
                            </populationcontext.Consumer>
                        )
                    }
                }
            </cityconext.Consumer>

        </>
    )
}

export { Contactus }