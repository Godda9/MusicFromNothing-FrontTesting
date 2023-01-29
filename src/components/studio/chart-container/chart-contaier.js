import Chart from "../chart/chart";

const ChartContainer = (props) => {
    const {id} = props;

    // extract timecodes on drop main view
    const getTimeCodes = (object) => {
        // test code
        console.log(object)
        object.play();
        console.log(object.start, object.end);
    }

    return (
        <>
            <Chart temp={0} getTimeCodes={(object) => getTimeCodes(object)}/>
            <Chart temp={1} getTimeCodes={(object) => getTimeCodes(object)}/>
            <Chart temp={2} getTimeCodes={(object) => getTimeCodes(object)}/>
            <Chart temp={3} getTimeCodes={(object) => getTimeCodes(object)}/>
            <Chart temp={4} getTimeCodes={(object) => getTimeCodes(object)}/>
        </>
    );
}

export default ChartContainer;