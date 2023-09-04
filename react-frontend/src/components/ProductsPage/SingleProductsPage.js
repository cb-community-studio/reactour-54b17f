import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';
import { InputText } from 'primereact/inputtext';

const SingleProductsPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("products")
            .get(urlParams.singleProductsId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Products", type: "error", message: error.message || "Failed get products" });
            });
    }, []);

    const goBack = () => {
        history.replace("/products");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Products</h3>
                </div>
                <p>products/{urlParams.singleProductsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">Name</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.ProductName}} onChange={(e) => setValByKey("{data?.ProductName}", e.target.value)}  />
                    <label className="text-sm">price</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.price}} onChange={(e) => setValByKey("{data?.price}", e.target.value)}  />
                    <label className="text-sm">description</label>
                    <p className="m-0" >{data?.description}</p> */}
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleProductsPage);
