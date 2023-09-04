
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const ProductsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const inputTemplate0 = (rowData, { rowIndex }) => <InputText value={rowData.ProductName}  />
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.price}  />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.description}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="ProductName" header="Name" body={inputTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="price" header="price" body={inputTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="description" header="description" body={pTemplate2} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductsDataTable;