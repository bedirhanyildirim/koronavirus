getData("https://coronavirus-19-api.herokuapp.com/countries")

        function getData(url){
            fetch(url)
            .then(res => res.json())
            .then(findTr)
        }

        function findTr(data) {
            for (let r of data){
                if (r.country == "Turkey") {
                    console.log(r)
                    yazdir(r)
                }
            }
        }

        function yazdir(data) {
            document.getElementById("casesCounter").innerText = JSON.stringify(data.cases)
            document.getElementById("deathsCounter").innerText = JSON.stringify(data.deaths)
            document.getElementById("recoveredCounter").innerText = JSON.stringify(data.recovered)
            document.getElementById("todayCases").innerText = JSON.stringify(data.todayCases)
            document.getElementById("todayDeaths").innerText = JSON.stringify(data.todayDeaths)
            document.getElementById("active").innerText = JSON.stringify(data.active)
        }

        //https://coronavirus-19-api.herokuapp.com/countries
        //{"country":"Turkey","cases":47,"todayCases":29,"deaths":0,"todayDeaths":0,"recovered":0,"active":47,"critical":0}