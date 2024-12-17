import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BikesInt {
    station_id: string,
    electric:string,
    smart: string,
    classic: string
}

export interface DataInt {
    station_id: string
    last_reported: string
    is_returning: string
    is_renting: string
    is_installed: string
    num_docks_available: string
    num_bikes_available: string
    num_bikes_available_types: BikesInt
  }

interface GridDataState {
    selectedRow: BikesInt[]
    allGridRows: DataInt[]
  }

const initialState: GridDataState = {
    selectedRow: [],
    allGridRows: [],
};

const gridDataSlice = createSlice({
    name: "gridData",
    initialState,
    reducers: {
        updateSelectedRow: (state, action: PayloadAction<Array<BikesInt>>) => {
            state.selectedRow = action.payload
        },
        setAllGridRows: (state, action: PayloadAction<Array<DataInt>>) => {
            state.allGridRows = action.payload
        },
    },
});

export const { updateSelectedRow, setAllGridRows } = gridDataSlice.actions;

export default gridDataSlice.reducer;
