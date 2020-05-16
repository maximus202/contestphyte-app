import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CONTESTS from '/Users/maxxratto/Code_Projects/contestphyte-app/src/CONTESTS.js';

class EditContest extends Component {
  render() {
    const { contestId } = this.props.match.params;

    const contestDetails = CONTESTS.find((contest) => contest.id == contestId);
    console.log(contestDetails);
    return (
      <>
        <NavBar />
        <header className="with-margins">
          <h1>Edit Contest</h1>
        </header>
        <main>
          <form className="with-margins">
            <section className="form-section">
              <h2>Business information</h2>
              <label htmlFor="business-name">Business name</label>
              <input type="text" name="business-name" placeholder={contestDetails.companyName} />
              <label htmlFor="business-website-url">Business Website URL</label>
              <input type="url" name="business-website-url" placeholder={contestDetails.companyUrl} />
            </section>
            <section className="form-section">
              <h2>Contest details</h2>
              <p>
                Contest Start Date:
                {' '}
                {contestDetails.startDate}
                {' '}
                (Start date cannot be edited)
              </p>
              <p>
                Contest Start Time:
                {' '}
                {contestDetails.startTime}
                {' '}
                (Start time cannot be edited)
              </p>
              <label htmlFor="contest-end-date">Contest End Date</label>
              <input type="date" name="contest-end-date" placeholder={contestDetails.endDate} />
              <label htmlFor="contest-end-time">Contest End Time</label>
              <input type="time" name="contest-end-time" placeholder={contestDetails.endTime} />
              <label htmlFor="timezone">Contest timezone</label>
              <select id="timezone" name="timezone" placeholder={contestDetails.timezone}>
                <option value="eastern">Eastern Time (EDT)</option>
                <option value="central">Central Time (CDT)</option>
                <option value="mountain">Mountain Time (MDT)</option>
                <option value="pacific">Pacific Time (PDT)</option>
                <option value="alaska">Alaska Time (AKDT)</option>
                <option value="hawaii">Hawaii Time (HST)</option>
              </select>
              <label htmlFor="prize-description">Prize Description</label>
              <input type="text" name="prize-description" placeholder={contestDetails.contestDescription} />
              <label htmlFor="prize-value">Prize Value</label>
              <input type="text" name="price-value" placeholder={contestDetails.contestValue} />
              <label htmlFor="contest-title">Contest Title</label>
              <input type="text" name="contest-title" placeholder={contestDetails.contestName} />
              <label htmlFor="contest-description">Contest Description</label>
              <input type="text" name="contest-description" placeholder={contestDetails.contestDescription} />
              <label htmlFor="image-url">Image URL</label>
              <input type="url" name="image-url" placeholder={contestDetails.imageUrl} />
              <input type="checkbox" name="marketing-optin" />
              <label htmlFor="marketing-optin">Do you want to ask participants if they want to join your marketing email list?</label>
            </section>
            <section className="form-section">
              <h2>Official Rules</h2>
              <p>
                Contestphyte does not sponsor, administer or endorse this promotion.
                By running a contest, you acknowledge that you are responsible for your own &quot;Official Rules&quot;. Contestphyte is not responsible for notifying winners of this promotion or to provide the prizes/incentives for participants you select as &quot;winner(s)&quot;.

              </p>
              <label htmlFor="contest-rules-url">Contest Rules URL</label>
              <input type="text" name="contest-rules-url" placeholder={contestDetails.officialRulesUrl} />
              <label htmlFor="contact-email">Contact Email</label>
              <input type="email" name="contact-email" placeholder={contestDetails.contactEmail} />
              <label htmlFor="business-mailing-address">Business Mailing Address</label>
              <input type="email" name="business-mailing-address" placeholder={contestDetails.businessMailingAddress} />
              <label htmlFor="business-state">Business State</label>
              <select id="business-state" name="business-state" placeholder={contestDetails.businessState}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <label htmlFor="business-zip">Business Zip Code</label>
              <input type="text" name="business-zip" placeholder={contestDetails.businessZip} />
            </section>
            <section className="create-contest-form-options">
              <p><a href="/contest/1">Preview</a></p>
              <p><a href="/contests">Save Draft</a></p>
            </section>
            <input type="submit" value="Publish" />
          </form>
        </main>
      </>
    );
  }
}

export default EditContest;
