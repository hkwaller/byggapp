import React from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import SubHeader from '../components/SubHeader'
import Customer from '../components/Customer'
import Information from '../components/Information'
import Tasks from '../components/tasks/Tasks'
import './assignment.css'

function Assignment(props) {
    if (Object.keys(props.anbud).length === 0) {
        return (
            <Loader />
        )
    }
    const anbud = props.anbud[props.match.params.id]

    return (
        <div className="assignment-outer-container">
            <div className="assignment-container">
                <SubHeader title={ anbud.description } />
                <Customer info={ anbud.customer } />
                <Information rot={ anbud.rot } info={ anbud.info } />
                <Tasks tasks={ anbud.tasks } />
            </div>
            <div className="assignment-guarantee">
                <h2>Garanti</h2>
                <div>10-års garanti på tätskiktet i badrummet.</div>
                <div>Allrisk och byggförsäkring via Folksam.</div>
                <div>Kvadivtetsdokument och el-protokoll.</div>
                <div>A-konto fakturering sker.</div>
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    anbud: state.anbud,
})

export default connect(
    mapStateToProps,
)(Assignment)