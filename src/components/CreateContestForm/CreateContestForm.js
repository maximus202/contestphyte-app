import React, { Component } from 'react';
import ApiService from '../../services/api-service';

class CreateContestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      companyUrl: '',
      companyEmail: '',
      contestName: '',
      imageUrl: '',
      contestDescription: '',
      prizeValue: '',
      officialRulesUrl: '',
      businessMailingAddress: '',
      businessState: '',
      businessZipCode: '',
      endDateTime: '',
      handleCompanyName: this.handleCompanyName,
      handleCompanyUrl: this.handleCompanyUrl,
      handleCompanyEmail: this.handleCompanyEmail,
      handleContestName: this.handleContestName,
      handleImageUrl: this.handleImageUrl,
      handleContestDescription: this.handleContestDescription,
      handlePrizeValue: this.handlePrizeValue,
      handleOfficialRulesUrl: this.handleOfficialRulesUrl,
      handleBusinessMailingAddress: this.handleBusinessMailingAddress,
      handleBusinessState: this.handleBusinessState,
      handleBusinessZipCode: this.handleBusinessZipCode,
      handleEndDateTime: this.handleEndDateTime,
      handleSubmitNewContest: this.handleSubmitNewContest,
    };
  }

  handleCompanyName = (event) => {
    this.setState({
      companyName: event.target.value
    })
  }

  handleCompanyUrl = (event) => {
    this.setState({
      companyUrl: event.target.value
    })
  }

  handleCompanyEmail = (event) => {
    this.setState({
      companyEmail: event.target.value
    })
  }

  handleContestName = (event) => {
    this.setState({
      contestName: event.target.value
    })
  }

  handleImageUrl = (event) => {
    this.setState({
      imageUrl: event.target.value
    })
  }

  handleContestDescription = (event) => {
    this.setState({
      contestDescription: event.target.value
    })
  }

  handlePrizeValue = (event) => {
    this.setState({
      prizeValue: event.target.value
    })
  }

  handleOfficialRulesUrl = (event) => {
    this.setState({
      officialRulesUrl: event.target.value
    })
  }

  handleBusinessMailingAddress = (event) => {
    this.setState({
      businessMailingAddress: event.target.value
    })
  }

  handleBusinessState = (event) => {
    this.setState({
      businessState: event.target.value
    })
  }
  
  handleBusinessZipCode = (event) => {
    this.setState({
      businessZipCode: event.target.value
    })
  }

  handleEndDateTime = (event) => {
    this.setState({
      endDateTime: event.target.value
    })
  }

  handleSubmitNewContest = (e) => {
    e.preventDefault()
    const { history } = this.props;
    const {
      companyName,
      companyUrl,
      companyEmail,
      contestName,
      imageUrl,
      contestDescription,
      prizeValue,
      officialRulesUrl,
      businessMailingAddress,
      businessState,
      businessZipCode,
      endDateTime,
    } = this.state;
    const inputData = {
      company_name: companyName,
      company_url: companyUrl,
      company_email: companyEmail,
      contest_name: contestName,
      image_url: imageUrl,
      contest_description: contestDescription,
      prize_value: prizeValue,
      official_rules_url: officialRulesUrl,
      business_mailing_address: businessMailingAddress,
      business_state: businessState,
      business_zip_code: businessZipCode,
      end_datetime: endDateTime,
    }
    ApiService.submitNewContest(inputData, history)
      .then(() => history.push('/'))
  }

  render() {
    const {
      handleCompanyName,
      handleCompanyUrl,
      handleCompanyEmail,
      handleContestName,
      handleImageUrl,
      handleContestDescription,
      handlePrizeValue,
      handleOfficialRulesUrl,
      handleBusinessMailingAddress,
      handleBusinessState,
      handleBusinessZipCode,
      handleEndDateTime,
      handleSubmitNewContest,
    } = this.state;
    return (
      <main>
        <form className="with-margins" onSubmit={(e) => handleSubmitNewContest(e)}>
          <section className="form-section">
            <h2>Business information</h2>
            <label htmlFor="business-name">Business name</label>
            <input type="text" name="business-name" placeholder="The name of your company (ex: ABC company)." onChange={handleCompanyName} required/>
            <label htmlFor="business-website-url">Business Website URL</label>
            <input type="url" name="business-website-url" placeholder="Your company's website (ex: http://www.abccompany.com)." onChange={handleCompanyUrl} required/>
          </section>
          <section className="form-section">
            <h2>Contest details</h2>
            <label htmlFor="contest-end-datetime">Contest End Date/Time</label>
            <input type="datetime-local" name="contest-end-datetime" onChange={handleEndDateTime} required/>
            <label htmlFor="prize-value">Prize Value (USD)</label>
            <input type="text" name="price-value" placeholder="300" onChange={handlePrizeValue} required/>
            <label htmlFor="contest-title">Contest Title</label>
            <input type="text" name="contest-title" placeholder="Ex: Enter our giveaway for a chance to win a gift card!" onChange={handleContestName} required/>
            <label htmlFor="contest-description">Contest Description</label>
            <input type="text" name="contest-description" placeholder="Use this block to motivate users to enter your giveaway." onChange={handleContestDescription} required/>
            <label htmlFor="image-url">Image URL</label>
            <input type="url" name="image-url" placeholder="Recommended size: 800x400, Recommended file type: JPEG" onChange={handleImageUrl} required />
          </section>
          <section className="form-section">
            <h2>Official Rules</h2>
            <p>
              Contestphyte does not sponsor, administer or endorse this promotion.
              By running a contest, you acknowledge that you are responsible for your own &quot;Official Rules&quot;. Contestphyte is not responsible for notifying winners of this promotion or to provide the prizes/incentives for participants you select as &quot;winner(s)&quot;.

            </p>
            <label htmlFor="contest-rules-url">Contest Rules URL</label>
            <input type="text" name="contest-rules-url" placeholder="Ex: http://www.abccompany.com/contesttermsandconditions" onChange={handleOfficialRulesUrl} required/>
            <label htmlFor="contact-email">Contact Email</label>
            <input type="email" name="contact-email" placeholder="Ex: contact@abccompany.com" onChange={handleCompanyEmail} required/>
            <label htmlFor="business-mailing-address">Business Mailing Address</label>
            <input type="text" name="business-mailing-address" placeholder="Ex: 123 W Main St." onChange={handleBusinessMailingAddress} required/>
            <label htmlFor="business-state">Business State</label>
            <select id="business-state" name="business-state" onChange={handleBusinessState} required>
              <option value="">--Please choose an option--</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District Of Columbia">District Of Columbia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
            <label htmlFor="business-zip-code">Business Zip Code</label>
            <input type="text" name="business-zip-code" placeholder="Ex: 38424" onChange={handleBusinessZipCode} required />
          </section>
          <section className="create-contest-form-options">
          </section>
          <input type="submit" value="Publish" />
        </form>
      </main>
    );
  }
}

export default CreateContestForm;
