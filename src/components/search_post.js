import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyProvince, fetchMyDistrictByProcinceValue } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import SearchDistrict from './search_district';

class SearchPost extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedProvinceOption: '', districtOptions: [] }

    }
    handleChange = selectedProvinceOption => {
        this.setState({ selectedProvinceOption })
        fetchMyDistrictByProcinceValue(this.state.selectedProvinceOption.value);
        // this.state.selectedProvinceOption.value
        this.setState({districtOptions:[{'label':'a','value':'b'}]})
        
    }
    renderProvinces() {
        const arrayProvincesOptions = [];
        const provinces = this.props.provinces;
        _.map(provinces, province => {
            const objProvince = {};
            objProvince.value = province.province_code;
            objProvince.label = province.province_name;
            arrayProvincesOptions.push(objProvince);
        })
        return (

            <div className="col-sm">
                <Select options={arrayProvincesOptions} onChange={this.handleChange} >
                </Select>

            </div>

        );

    }

    componentDidMount() {
        this.props.fetchMyProvince();
    }


    render() {
        return (
            <div className="row">
                {this.renderProvinces()}
                <div className="col-sm">
                    <Select options={this.state.districtOptions} >
                    </Select>
                </div>
                <div className="col-sm">

                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { provinces: state.provinces, district: state.district }
}

export default connect(mapStateToProps, { fetchMyProvince, fetchMyDistrictByProcinceValue })(SearchPost);