
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const ItemsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.itemID}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.ProductName}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.productPrice}</p>
    const inputTemplate3 = (rowData, { rowIndex }) => <InputText value={rowData.Quantity}  />
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.SubTotal}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="itemID" header="Name" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="ProductName" header="ProductName" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="productPrice" header="productPrice" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="Quantity" header="Quantity" body={inputTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="SubTotal" header="SubTotal" body={pTemplate4} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ItemsDataTable;