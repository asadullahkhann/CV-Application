import '../styles/resume.css';
import emailSVG from '../assets/email.svg';
import phoneSVG from '../assets/phone.svg';
import locationSVG from '../assets/location.svg';

export default function Resume({cv}) {
  return (
    <div className="resume">
      <div className="contact">
        <h1 className="capitalize">
          {cv.name}
          <span className="capitalize">{cv.profession}</span>
        </h1>
        <div>
          <p>
            <img width={16} height={16} src={phoneSVG} alt="" />
            {cv.phoneNumber}
          </p>
          <span className="separator">|</span>
          <p>
            <img width={16} height={16} src={emailSVG} alt="" /> 
            {cv.email}
          </p>
          <span className="separator">|</span>
          <p className='capitalize'>
            <img width={16} height={16} src={locationSVG} alt="" />
            {cv.location}
          </p>
        </div>
      </div>
      <div>
        <h2>About me</h2>
        <p>{cv.aboutMe}</p>
      </div>
      <div className="education">
        <h2>Education</h2>
        <p className="text-secondary capitalize">{cv.schoolName}</p>
        <h3 className="capitalize">{cv.titleOfStudy}</h3>
      </div>
      <div className="work-experience">
        <h2>Work Experience</h2>
        <p className="text-secondary capitalize">
          {cv.companyName} | {cv.startYear} - {cv.endYear || 'Present'}
        </p>
        <h3 className="capitalize">{cv.positionTitle}</h3>
        <p className="desc">{cv.desc}</p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {cv.getSkills().map((skill, i) => {
          return skill && <li key={i}>• {skill}</li>
          })}
        </ul>
      </div>
    </div>
  )
}