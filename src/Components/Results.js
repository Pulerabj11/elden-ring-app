const Results = ({results}) => {
    var itemNames = []
    for (var i in results) {
        itemNames.push(results[i]['ref'])
    }
    console.log(itemNames)
    return (
        <div>
            
        </div>
    )
}

export default Results