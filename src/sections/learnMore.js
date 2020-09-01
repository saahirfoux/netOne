import React from 'react';
import "./modal.css";

function Learn(props) { 

    const onClose = (e) => {
        props.onClose && props.onClose(e)
    }

    if (!props.show) {
        return ''
    }

    return <div class="modal" id="modal">
            <h2>Learn More</h2>
            <div class="content">
                <div class="learnMore">    
                    <p>If you’ve established yourself as an Independent Contractor (IC) and would like to engage in that manner, you will be subject to NetOne Recruiter’s IC Validation Process 
                    below which protects you and our clients from misclassification penalties. As an IC, when offered a new job by a client on the NetOne Recruiter platform, you will be required to complete 
                    a brief questionnaire and provide documentation to validate your IC status. This documentation includes but is not limited to the following: Business license, proof of 
                    business insurance (General Liability), evidence of tax filings, articles of incorporation, evidence of advertising your business and evidence of concurrent customers. </p>

                    <p>If you do not believe you will pass the IC validation process mentioned above, you may simply engage as a W2 employee of NetOne Recruiter. All jobs posted on NetOne Recruiter support W2 employment status.
                    The following provides further details of your options:</p>
                    
                    <strong>Option 1</strong>
                    
                    <p>Select “W2 with NetOne Recruiter” on your profile and enter your desired W2 pay rate. This will allow Talent Leaders to see your profile, set up interviews and make you an offer. 
                    When selected for a job, you will be onboarded as a W2 employee of NetOne Recruiter for the duration of your job.</p>
                    
                    <strong>Option 2</strong>
                    
                    <p>Select “IC 1099 Only” and enter your desired pay rate as an IC. You will be subject to the IC validation process. Please note that some clients may not accept IC’s. In those cases, you will not be eligible to apply to their jobs. When selected for a job, you will contract through NetOne Recruiter for the duration of your job.</p>
                    
                    <strong>Option 3</strong>
                    
                    <p>Select “IC, also willing to work as W2” and enter your desired W2 pay rate and desired Independent Contractor pay rate. Choosing this option gives you visibility to all jobs and makes you eligible to apply for both IC and W2 only jobs. You will be subject to the IC validation process above for all IC eligible jobs.
                    Please feel free to visit the following sites to learn more about what it takes to become an IC.</p>  
                </div>    
            </div>
            <div class="actions">
                <button class="toggle-button" onClick={onClose}>
                close
                </button>
            </div>
        </div>;
}

export default Learn;