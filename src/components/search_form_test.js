import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchMyProvince, fetchMyDistrictByProcinceValue, getList, getFile } from '../actions/index';
import { connect } from 'react-redux';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { request } from 'https';
import PriceTestContainer from './table_report';
import DatatablePage from './table_action';
import ReactDOM from 'react-dom';
import DatePickerPage from "./date_picker";
import ModalExample from './modal_test';
import UploadInput from './upoad_file_input';

class SearchFormTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                'province': '',
                'district': '',
                dataTable: {
                    columns: [
                        {

                            label: 'Id',
                            field: 'id',
                            sort: 'asc',
                            width: 150

                        },
                        {
                            label: 'Province',
                            field: 'province_code',
                            sort: 'asc',
                            width: 150
                        },
                        {
                            label: 'District',
                            field: 'district_code',
                            sort: 'asc',
                            width: 150
                        },

                        {
                            label: 'Data_01',
                            field: 'data_row_one',
                            sort: 'asc',
                            width: 150
                        },
                        {
                            label: 'Data_02',
                            field: 'data_row_two',
                            sort: 'asc',
                            width: 150
                        },
                        {
                            label: 'Data_03',
                            field: 'data_row_three',
                            sort: 'asc',
                            width: 150
                        },
                        {
                            label: 'Action',
                            field: 'action',
                            sort: 'asc',
                            width: 150
                        }
                    ],
                    rows: [{}]
                }
            }

        }
    }
    handleDistrictChange = selectedDistrictOption => {
        this.setState(prevState => ({
            data: {                   // object that we want to update
                ...prevState.data,    // keep all other key-value pairs
                district: selectedDistrictOption.value       // update the value of specific key
            }
        }))
    }
    handleChange = selectedProvinceOption => {
        this.setDistrict(selectedProvinceOption.value);
        this.setState(prevState => ({
            data: {                   // object that we want to update
                ...prevState.data,    // keep all other key-value pairs
                province: selectedProvinceOption.value       // update the value of specific key
            }
        }))
    }
    componentWillReceiveProps(nextProps) {
    }
    componentWillUpdate(nextProps, nextState) {
    }
    setDistrict = (provinceCode) => {
        fetchMyDistrictByProcinceValue(provinceCode, (request) => {
            if (request.data) {
                this.setState({
                    district: request.data.map((district) => {
                        return {
                            value: district.district_code,
                            label: district.district_name
                        }
                    })
                })
            }

        })
    }
    renderComboboxField(field) {
        return (

            <div className="col-sm">
                <label>{field.label}</label>
                <Select options={
                    _.map(field.provinces, province => {
                        return {
                            value: province.province_code,
                            label: province.province_name
                        }
                    })
                } onChange={field.handleChange} />
            </div>
        );
    }
    renderFileField(field) {
        return (
            <div className="col-sm">
                <label>{field.label}</label>
                <UploadInput />
            </div>
        );
    }
    renderComboboxDistrictField(field) {

        return (

            <div className="col-sm">
                <label>{field.label}</label>
                <Select options={field.district} onChange={field.handleChange} />
            </div>
        );
    }
    componentDidMount() {
        this.props.fetchMyProvince();

    }

    onSubmit() {
        this.props.getList(this.state.data, (data) => {

            if (data.data == "") {
                this.setState(prevState => ({
                    ...prevState,
                    data: {
                        ...prevState.data,
                        dataTable: {                   // object that we want to update
                            ...prevState.data.dataTable,                // keep all other key-value pairs
                            rows: []       // update the value of specific key
                        }
                    }
                }))
            } else {
                // this.setState({ dataReport: data })
                this.setState(prevState => ({
                    ...prevState,
                    data: {
                        ...prevState.data,
                        dataTable: {
                            ...prevState.data.dataTable,              // object that we want to update
                            // keep all other key-value pairs
                            rows: _.map(data.data, data => {
                                data.action = <ModalExample buttonLabel="test" id={data.id} />
                                return data
                            })     // update the value of specific key
                        }
                    }
                }))
            }
        });
    }
    downloadFile = () => {
        getFile("1.PNG", (request) => {
        })
    }




    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="row">
                        <Field
                            label="Tỉnh/Thành Phố"
                            props={this.props}
                            provinces={this.props.provinces}
                            name="province"
                            handleChange={this.handleChange}
                            component={this.renderComboboxField}
                        />
                        <Field
                            label="Quận/Huyện"
                            district={this.state.district}
                            name="district"
                            handleChange={this.handleDistrictChange}
                            component={this.renderComboboxDistrictField}
                        />

                    </div>
                    <div className="row">
                        <DatePickerPage />
                        <Field

                            label="Input File"
                            name="Input File"
                            component={this.renderFileField}
                        />
                    </div>
                    <div className="div-button">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger" >Cancel</Link>
                        <button type="button" className="btn btn-normal" onClick={this.downloadFile.bind(this)}>Tải File Excel </button>

                    </div>
                </form>

                <div>
                    {/* <PriceTestContainer columns={this.state.columns} data={this.state.dataReport} /> */}
                </div>

                <div >
                    <DatatablePage data={this.state.data.dataTable} />
                </div>

            </div>

        );
    }
}
function mapStateToProps(state) {
    return { provinces: state.provinces, district: state.district }
}
export default reduxForm({
    form: 'SearchFormTest',

})(
    connect(mapStateToProps, { fetchMyDistrictByProcinceValue, fetchMyProvince, getList, getFile })(SearchFormTest)
);