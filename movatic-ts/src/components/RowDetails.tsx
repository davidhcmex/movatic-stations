import { useSelector } from "react-redux"
import "./details.css"
import { RootState } from "./state/store";

const RowDetails = () => {
    const data = useSelector(getSelectedRows());
    return (
        <div className='textbox-container' style={{ width: "100%", height: "100%" }}>
            {data && data.length > 0 &&
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Station Id</th>
                                <th>Electric</th>
                                <th>Smart</th>
                                <th>Classic</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data[0].station_id}</td>
                                <td>{data[0].electric}</td>
                                <td>{data[0].smart}</td>
                                <td>{data[0].classic}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            }
        </div>
    );
};

export default RowDetails

export function getSelectedRows() {
    return (
        function (state:RootState) { return state.gridRows.selectedRow }
    )
}