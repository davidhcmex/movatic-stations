import { useEffect, useState } from "react"
import DataGrid from './DataGrid'
import RowDetails from './RowDetails'
import { useDispatch } from "react-redux";
import { DataInt, setAllGridRows } from "./state/storeSlice"

const DashBoard = () => {
    const [data, setData] = useState<DataInt[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/stations-data');
            const result = await response.json();
            setData(result);
            dispatch(setAllGridRows(result));
        }
        fetchData();
    }, []);

    return (
        <div style={{ width: "1200px", height: "500px" }}>
            {data?.length > 0 &&
                <div style={{ height: '250px', maxHeight: '250px', width: '100%', margin: '15px' }}>
                    <h3>Bike Stations Data</h3>
                    <DataGrid />
                    <br />
                    <RowDetails />
                </div>
            }
        </div>
    );
}

export default DashBoard