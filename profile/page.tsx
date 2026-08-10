import { Header } from "@/components/header";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header/>

      <section className="profile-section">
        <form className="profile-form">
          <h2>Volunteer Profile</h2>

          <fieldset>
            <legend>Personal Information</legend>

            <div className="form-group">
              <label htmlFor="fullname">First Name</label>
              <input
                type="text"
                id="fullname"
                name="firstname"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullname">Last Name</label>
              <input
                type="text"
                id="fullname"
                name="lastname"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">
                  Prefer not to say
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Skills</legend>

            <div className="form-group">
              <label htmlFor="skills">List Your Skills</label>
              <textarea
                id="skills"
                name="skills"
                rows={5}
                placeholder="Leadership, Graphic Design, Programming, Teaching..."
              ></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>Education</legend>

            <div className="form-group">
              <label htmlFor="institution">Institution</label>
              <input
                type="text"
                id="institution"
                name="institution"
              />
            </div>

            <div className="form-group">
              <label htmlFor="qualification">Qualification</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
              />
            </div>

            <div className="form-group">
              <label htmlFor="study">Field of Study</label>
              <input
                type="text"
                id="study"
                name="study"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gradyear">Graduation Year</label>
              <input
                type="number"
                id="gradyear"
                name="gradyear"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Experience</legend>

            <div className="form-group">
              <label htmlFor="experience">
                Volunteer or Work Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={6}
              ></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>Interests</legend>

            <div className="form-group">
              <label htmlFor="interests">Areas of Interest</label>
              <textarea
                id="interests"
                name="interests"
                rows={5}
                placeholder="Healthcare, Education, Environment, Community Development..."
              ></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>CV / Resume</legend>

            <div className="form-group">
              <label htmlFor="resume">Upload CV/Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
              />
            </div>
          </fieldset>

          <button type="submit">Save Profile</button>
        </form>
      </section>

      <Footer/>
    </>
  );
}