import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyDistrictByProcinceValue } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Select from 'react-select';

class SearchPost extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedDistrictOption: 'H4545' }

    }
    handleChange = selectedProvinceOption => {
        this.setState({ selectedProvinceOption })
        fetchMyDistrictByProcinceValue(this.state.selectedProvinceOption.value);
        // this.state.selectedProvinceOption.value
    }
    renderDistrict() {
        const arrayDistrictOptions = [];
        const districtObj = this.props.district;
        _.map(districtObj, district => {
            const objDistrict = {};
            objDistrict.value = district.district_code;
            objDistrict.label = district.district_name;
            arrayDistrictOptions.push(objDistrict);
        })
        return (
            <div className="col-sm">
                <Select options={arrayDistrictOptions} onChange={this.handleChange} >
                </Select>
            </div>
        );

    }

    componentDidMount() {
        this.setState({ selectedDistrictOption: this.props.provinceCode })
        this.props.fetchMyDistrictByProcinceValue(this.state.selectedDistrictOption);
    }


    render() {
        return (
            <div className="row">
                {this.renderDistrict()}
                <div className="col-sm">

                </div>
                <div className="col-sm">

                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { district: state.district }
}

export default connect(mapStateToProps, { fetchMyDistrictByProcinceValue })(SearchPost);