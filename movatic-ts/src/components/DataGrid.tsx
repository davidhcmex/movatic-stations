import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllCommunityModule, ColDef, ModuleRegistry, SelectionChangedEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {  updateSelectedRow } from "./state/storeSlice"
import { RootState } from "./state/store";

ModuleRegistry.registerModules([AllCommunityModule]);

const DataGrid = () => {
    const data = useSelector(getAllRows());

    const colDefs: ColDef[] = [
        { headerName: "Station Id", field: 'station_id' },
        { headerName: "Date", valueGetter: (params) => (new Date(params.data.last_reported * 1000)).toLocaleString() },
        { headerName: "Returned", field: 'is_returning' },
        { headerName: "Rented", field: 'is_renting' },
        { headerName: "Installed", field: 'is_installed' },
        { headerName: "Available Docks", field: 'num_docks_available' },
        { headerName: "Available Bikes", field: 'num_bikes_available' },
    ];

    const dispatch = useDispatch();

    const defaultColDef = {
        resizable: true,
    };

    const onSelectionChanged = useCallback((event:SelectionChangedEvent) => {
        const selectedRow = event.api.getSelectedRows();
        const foundInData = data.find(item => item.station_id === selectedRow[0].station_id)
        const fullObjectTodispatch = { ...foundInData!.num_bikes_available_types, station_id: selectedRow[0].station_id }
        dispatch(updateSelectedRow([fullObjectTodispatch]))
    }, [])

    return (

        <AgGridReact
            rowData={data}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            rowSelection="single"
            onSelectionChanged={onSelectionChanged}
            onGridReady={(params) => { params.api.sizeColumnsToFit(); }}
        />

    );
};

export default DataGrid

export function getAllRows() {
    return (
        function (state:RootState) { return state.gridRows.allGridRows }
    )
}