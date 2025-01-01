
function CurrentCityWeather(){

    fetch('http://localhost:8000/api/weather?city=Moscow')
        .then(resp => {
            console.log(resp.json())
            console.log(1)
        })
        .catch(err => {
            console.log(err)
            console.log(2)
        })



    return(
        <>
            <p>fffff</p>
        </>
    )
}

export default CurrentCityWeather;