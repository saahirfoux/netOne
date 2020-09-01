import React from 'react';
import SubText from './subText';
import Rates from './rates';
import TravelSlider from './travel';
import Upload from './upload';
import LearnMore from './learnMore';

 
function Documents({selected}) {
    console.log(selected, 'selected passed')
  return selected === 'netone' ? <Empty selected={selected}/> : selected === false ? <Empty selected={selected}/> : <DocumentsPending/>;
}
 
function Empty({selected}) {
    const infomationalText = 'No Document(s) Required';

    let className = "documentsPending";
    if (selected === false) {
        className += " empty";
    }
    return <div className={className}>
                <div className="docContainer">
                    <p>{infomationalText}</p>
                </div>
            </div>;
}

function DocumentsPending() {
    const title = 'Documents Pending';

    return <div className="documentsPending">
                <fieldset className="fieldContainer">
                    <legend>{title}</legend>
                    <div class="uploads">
                        <Upload title="*Proof of Liability Insurance"/>
                        <Upload title="Articles of Incorporation"/>
                        <Upload title="Business License"/>
                        <Upload title="Evidence of Advertising"/>
                        <Upload title="Evidience of Tax Filings"/>
                        <Upload title="Fictitious Name Statement"/>
                        <Upload title="Proof of Concurrent Customers"/>
                        <Upload title="Articles of Incorporation"/>
                    </div>
                    <SubText/>
                </fieldset>
                
            </div>;
}
 
export {
    Documents,
    SubText,
    Rates,
    TravelSlider,
    Upload,
    LearnMore
};