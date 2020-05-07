import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

function CreateContest() {
  return (
    <>
      <NavBar />
      <header>
        <h1>Create a contest</h1>
      </header>
      <main>
        <form>
          <section className="form-section">
            <h2>Business information</h2>
            <label htmlFor="business-name">Business name</label>
            <input type="text" name="business-name" />
            <label htmlFor="business-website-url">Business Website URL</label>
            <input type="url" name="business-website-url" />
          </section>
          <section className="form-section">
            <h2>Contest details</h2>
            <label htmlFor="contest-start-date">Contest Start Date/</label>
            <input type="date" name="contest-start-date" />
            <label htmlFor="contest-start-time">Contest Start Time</label>
            <input type="time" name="contest-start-time" />
            <label htmlFor="contest-end-date">Contest End Date</label>
            <input type="date" name="contest-end-date" />
            <label htmlFor="contest-end-time">Contest End Time</label>
            <input type="time" name="contest-end-time" />
            <label htmlFor="timezone">Contest timezone</label>
            <select id="timezone" name="timezone">
              <option value="eastern">Eastern Time (EDT)</option>
              <option value="central">Central Time (CDT)</option>
              <option value="mountain">Mountain Time (MDT)</option>
              <option value="pacific">Pacific Time (PDT)</option>
              <option value="alaska">Alaska Time (AKDT)</option>
              <option value="hawaii">Hawaii Time (HST)</option>
            </select>
            <label htmlFor="prize-description">Prize Description</label>
            <input type="text" name="prize-description" />
            <label htmlFor="prize-value">Prize Value</label>
            <input type="text" name="price-value" />
            <label htmlFor="contest-title">Contest Title</label>
            <input type="text" name="contest-title" />
            <label htmlFor="contest-description">Contest Description</label>
            <input type="text" name="contest-description" />
            <label htmlFor="image-url">Image URL</label>
            <input type="url" name="image-url" />
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
            <input type="text" name="contest-rules-url" />
            <label htmlFor="contact-email">Contact Email</label>
            <input type="email" name="contact-email" />
            <label htmlFor="business-mailing-address">Business Mailing Address</label>
            <input type="email" name="business-mailing-address" />
            <label htmlFor="business-state">Business State</label>
            <select id="business-state" name="business-state">
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
          </section>
          <button type="button" name="preview">Preview</button>
          <button type="button" name="preview">Save Draft</button>
          <button type="submit" name="create">Publish</button>
        </form>
      </main>
    </>
  );
}

export default CreateContest;
