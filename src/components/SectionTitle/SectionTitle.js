import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    <p>{props.children}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;